# FreelasFactory

Fábrica de sites para negócios locais: catálogo de nichos, playbooks versionados e pipeline multi-agente no Orca que só entrega quando o site passa nos validadores e na revisão.

**Stack dos sites:** HTML + CSS + JS vanilla, Google Fonts, AOS e Lucide. Sem build, sem framework.

## Por onde começar

| Documento | O que tem |
|---|---|
| `docs/00-spec.md` | problema, decisão, escopo, briefing e checklist base |
| `docs/01-catalogo-nichos.md` | 5 nichos, 8 categorias e regras comuns |
| `docs/02-plano-execucao.md` | topologia dos agentes, fases, Orca, GitHub, marcos |
| `docs/03-contratos-agentes.md` | o que cada agente entrega e o que não pode fazer |
| `docs/04-loop-qualidade.md` | severidade, critério de saída, cap de iterações |
| `orchestration/README.md` | runbook com os comandos do Orca |

## Estrutura

```
docs/                      specs, catálogo, plano, contratos, loop
orchestration/             runbook + specs de task
_templates/projeto/        esqueleto copiado por cliente
nichos/<nicho>/<categoria>/
    _categoria.md          playbook (fonte única de verdade)
    referencias/           sites de referência do nicho
    projetos/<slug>/       briefing, plano, qa, dados, imagens, site
```

## Como um site nasce

1. `briefing.md` preenchido (Intake valida contra o mínimo da categoria).
2. `plano.md` aprovado por humano.
3. Copy escreve `dados/`.
4. Builder monta `site/`.
5. Fan-out de revisão: código, playbook, visual + validadores.
6. Loop de correção até zero BLOCKER/MAJOR (máx. 3 voltas).
7. Docs + PR com CI verde + aprovação → entrega.

## Status

- [x] **M0** — repo, docs, templates, 8 playbooks
- [ ] **M1** — piloto doceria fictícia com agentes reais
- [ ] **M2** — validadores + orquestração automatizada
- [ ] **M3** — CI no GitHub com branch protection
- [ ] **M4** — segundo nicho no mesmo pipeline
