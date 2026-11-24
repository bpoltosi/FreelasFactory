# Plano de execução — fábrica de sites com multi-agentes no Orca

## 1. Princípio

Um site = **um Run do Orca**. Um coordenador por projeto. Cada etapa é uma Task com artefato em arquivo. Nenhum agente revisa o próprio trabalho. O loop só fecha quando os validadores determinísticos passam **e** nenhum revisor aponta bloqueio.

Três regras que sustentam o resto:

1. **Arquivo é a interface.** Agente não conversa com agente por chat; entrega artefato versionado no repositório.
2. **Um escritor por vez.** Build e correção são serializados; revisão é paralela e somente leitura.
3. **Determinístico antes de LLM.** Script valida link, peso, `alt`, contraste e HTML antes de gastar revisor.

## 2. Topologia

```
                       ┌─────────────────────────────┐
                       │  ORQUESTRADOR  (1 por site) │
                       │  estado: project.json       │
                       └──────────────┬──────────────┘
                                      │
   ┌──────────┬──────────┬────────────┴───┬──────────┬────────────┐
   ▼          ▼          ▼                ▼          ▼            ▼
 INTAKE → PLANNER → COPY → BUILDER → REVIEW (fan-out) → DOCS → ENTREGA
                       ▲                   │
                       │      ┌────────────┼────────────┬──────────────┐
                       │      ▼            ▼            ▼              ▼
                       │   CÓDIGO      PLAYBOOK      VISUAL      VALIDADORES
                       └──── fix ◄──── findings ──────────────────────┘
                                  (máx. 3 voltas)
```

## 3. Papéis e agentes

| Papel | Agente | Escreve | Nível | Por quê esse agente |
|---|---|---|---|---|
| Orquestrador | bot (sessão do projeto) | `project.json` | — | Decide, não produz |
| Intake | `copilot` | `briefing.md` | rápido | Trabalho de formulário e validação |
| Planner | `claude` | `plano.md` | forte | Julgamento de estrutura e escopo |
| Copy | `claude` | `dados/textos.md` | forte | Texto é o que mais vende |
| Builder | `codex` | `site/` | forte | Melhor em código longo e consistente |
| Revisor de código | `claude` | `qa/review-code-N.md` | forte | Fornecedor diferente do builder → menos vício |
| Revisor de playbook | `grok` | `qa/review-playbook-N.md` | médio | Checklist objetivo, não precisa de força bruta |
| Revisor visual | `antigravity` | `qa/review-visual-N.md` + prints | médio | Abre o site e olha de verdade |
| Validador | script Node | `qa/validators-N.json` | — | Objetivo, reprodutível, barato |
| Docs | `copilot` | `README.md` do projeto | rápido | Documentação mecânica |

Regra de diversidade: **builder e revisor de código nunca são o mesmo agente**. É a defesa mais barata contra "o modelo concorda consigo mesmo".

## 4. Fases (Tasks do Run)

| # | Task | Entrada | Saída | Pronto quando |
|---|---|---|---|---|
| T1 | Intake | briefing bruto do cliente | `briefing.md` normalizado | todo campo do "briefing mínimo" da categoria preenchido |
| T2 | Plano | `briefing.md` + `_categoria.md` | `plano.md` | **gate humano** aprovado |
| T3 | Copy | `plano.md` | `dados/textos.md`, `dados/links.md` | cada seção do plano tem texto e CTA |
| T4 | Build | `dados/` + `imagens/` + `_categoria.md` | `site/` | abre sem erro no navegador, 3 breakpoints |
| T5 | Review | `site/` | 4 relatórios | todos os 4 revisores reportaram |
| T6 | Fix loop | relatórios | `site/` corrigido | zero BLOCKER/MAJOR ou 3 iterações |
| T7 | Docs | projeto inteiro | `README.md` do projeto | como publicar e como editar |
| T8 | Entrega | tudo | PR aberto | **gate humano** + CI verde |

T5 dispara **4 workers em paralelo** (limite do Orca: ~4 por lote). T6 é sempre um único builder.

## 5. Loop de qualidade

- **Severidade:** `BLOCKER` (quebra ou mente), `MAJOR` (falha o checklist da categoria), `MINOR` (polimento).
- **Critério de saída:** zero BLOCKER e zero MAJOR em todos os revisores + validadores verdes.
- **MINOR** não segura entrega: vai para `qa/backlog.md`.
- **Cap:** 3 iterações. Na 4ª, o projeto vira `blocked` e o orquestrador escala com resumo — nunca continua sozinho.
- **Re-execução seletiva:** na volta 2 e 3 roda só o check que falhou, não o fan-out inteiro.
- **Anti-trapaça:** builder não edita `qa/`, `_categoria.md` nem `plano.md` para "passar".

Detalhe em `docs/04-loop-qualidade.md`.

## 6. Mapeamento para o Orca

Um Run por projeto, um worktree por projeto:

```bash
# 1. Run do projeto
orca orchestration run-create --objective "site: doceria-bolo-da-praca"

# 2. Tasks com dependência (DAG)
orca orchestration task-create --spec-file orchestration/specs/T1-intake.md --task-title "T1 intake"
orca orchestration task-create --spec-file orchestration/specs/T2-plano.md  --task-title "T2 plano" --deps '["<id-T1>"]'

# 3. Workers (mesmo worktree do projeto, agentes diferentes)
orca orchestration worker-start --environment local --task <id-T1> --worktree current --agent copilot
orca orchestration worker-start --environment local --task <id-T4> --worktree current --agent codex
orca orchestration worker-start --environment local --task <id-T5> --worktree current --agent claude
```

- Worktree: `current` no piloto; `--worktree new-child --name site-<slug>` quando houver projetos em paralelo.
- Mensagem para worker em andamento: `orca orchestration send --to dispatch:<id> --subject "..." --body "..."`.
- Dúvida do worker: chega como `question`; o orquestrador responde com `reply` quando a resposta está no briefing, senão escala.
- Gate humano: `gate-create` bloqueando T2 e T8.

## 7. GitHub

- Repositório **privado** `bpoltosi/site-factory` (nome provisório).
- `main` protegida: PR obrigatório, CI verde, 1 aprovação.
- Um PR por projeto, branch `projeto/<slug>`, saída em `nichos/<nicho>/<categoria>/projetos/<slug>/site/`.
- CI (`validate.yml`) roda os mesmos validadores locais — o que o agente checa é o que o GitHub checa.
- Entrega = merge. Publicação do site fica fora de escopo por enquanto (pasta estática).

## 8. Validadores (M2)

| Script | Verifica | Falha o build? |
|---|---|---|
| `check-html.mjs` | HTML válido, `lang`, `title`, `meta description` | sim |
| `check-links.mjs` | links internos, `wa.me` com DDI, `tel:`, `mailto:`, mapa | sim |
| `check-assets.mjs` | peso por imagem, `alt`, `loading="lazy"` | sim |
| `check-budget.mjs` | peso total da página, número de requests | sim |
| `check-copy.mjs` | preço/dado que não existe no briefing, termos proibidos por nicho | sim |
| Lighthouse CI | performance, acessibilidade, SEO | aviso no M1, bloqueio no M3 |

## 9. Métricas por projeto

Iterações até verde · findings por severidade · tempo por fase · custo por projeto · retrabalho depois da entrega. Sem isso não dá para saber se o loop está melhorando ou só rodando.

## 10. Marcos

| Marco | Entrega | Critério de pronto |
|---|---|---|
| **M0** | repo + docs + templates + playbooks | push feito, estrutura navegável |
| **M1** | piloto doceria fictícia, 5 agentes reais, loop completo | site entregue com 1 volta de fix |
| **M2** | validadores + specs de task + orquestrador automatizado | um comando inicia o Run inteiro |
| **M3** | CI no GitHub + branch protection | PR reprova sozinho com site quebrado |
| **M4** | segundo nicho (restaurante) no mesmo pipeline | playbook generaliza sem mudar o loop |

## 11. Riscos

| Risco | Mitigação |
|---|---|
| Revisor elogia o próprio fornecedor | builder ≠ revisor, checklist objetivo |
| Loop infinito | cap de 3 + escalonamento humano |
| Custo alto | validador determinístico primeiro; revisor só no que sobrou |
| Conflito de escrita | um escritor por vez; revisores read-only |
| Padrão deriva entre projetos | `_categoria.md` é fonte única e versionada |
| Agente "conserta" o checklist | `qa/` e playbook são read-only para o builder |

## 12. Em aberto

1. Nome definitivo do repositório e visibilidade.
2. Quem aprova os gates T2/T8 — só você, ou um revisor de confiança também.
3. Orçamento máximo por projeto (iterações e custo).
4. Hospedagem do site entregue (fica fora até decidir).
