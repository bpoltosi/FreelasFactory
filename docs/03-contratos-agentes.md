# Contratos dos agentes

Cada papel tem entrada, saída, escopo de escrita e critério de pronto. Worker que recebe task fora do contrato **para e pergunta**.

## Preâmbulo padrão de toda task

Toda spec enviada a um worker começa com estas linhas:

```
Projeto: <slug>            Caminho: nichos/<nicho>/<categoria>/projetos/<slug>/
Categoria: <categoria>     Playbook: nichos/<nicho>/<categoria>/_categoria.md
Fase: T<n> <nome>          Iteração: <n> de 3
Você PODE editar: <lista exata>
Você NÃO PODE editar: qa/, plano.md, _categoria.md, docs/, qualquer outro projeto
Evidência esperada: <caminhos + saída de comando>
Reporte com worker_done: caminhos criados/alterados, comandos rodados, resultado.
```

---

## Orquestrador

- **Missão:** conduzir o Run do projeto, decidir transições, escalar.
- **Entrada:** pedido do owner, categorias, `project.json`.
- **Saída:** Tasks criadas, workers iniciados, `project.json` atualizado, resumo ao owner.
- **Pode escrever:** `project.json`, `qa/triage-N.md`.
- **Não pode:** escrever em `site/`, julgar review, aprovar gate humano.
- **Pronto quando:** a fase está concluída e a próxima task existe, ou o projeto está `blocked` com resumo.

## Intake

- **Entrada:** briefing bruto (texto, links, pasta `imagens/`).
- **Saída:** `briefing.md` preenchido + `dados/` inicial.
- **Pode escrever:** `briefing.md`, `dados/`.
- **Não pode:** inventar dado, seguir com campo essencial vazio.
- **Pronto quando:** o "briefing mínimo aceitável" da categoria está completo, ou há lista explícita do que falta.

## Planner

- **Entrada:** `briefing.md`, `_categoria.md`, referências da categoria.
- **Saída:** `plano.md` (seções, CTA, paleta, fontes, copy rascunho, riscos).
- **Pode escrever:** `plano.md`.
- **Não pode:** construir código, alterar o playbook.
- **Pronto quando:** cada seção tem conteúdo de origem e o plano marca o que será omitido.

## Copy

- **Entrada:** `plano.md`, `briefing.md`, `dados/`.
- **Saída:** `dados/textos.md`, `dados/links.md`, `meta.json`.
- **Pode escrever:** `dados/`.
- **Não pode:** prometer resultado, citar preço ausente, usar superlativo vazio.
- **Pronto quando:** toda seção do plano tem texto final e todo CTA tem link real.

## Builder

- **Entrada:** `plano.md`, `dados/`, `imagens/`, `_categoria.md`, `_templates/projeto/site`.
- **Saída:** `site/` funcional.
- **Pode escrever:** `site/`.
- **Não pode:** editar `qa/`, `plano.md`, `_categoria.md`, `dados/` (pede ao Copy), adicionar dependência fora da stack.
- **Pronto quando:** página abre, 3 breakpoints ok, seções na ordem do playbook, CTA no hero.

## Revisor de código

- **Entrada:** `site/`, `qa/review-*.md` anteriores.
- **Saída:** `qa/review-code-<n>.md`.
- **Pode escrever:** `qa/review-code-<n>.md`.
- **Não pode:** editar `site/` — só apontar.
- **Foco:** semântica HTML, CSS morto, JS quebrando, acessibilidade, contraste, foco.
- **Pronto quando:** todo achado tem arquivo:linha, severidade e correção esperada.

## Revisor de playbook

- **Entrada:** `site/`, `_categoria.md`, `briefing.md`.
- **Saída:** `qa/review-playbook-<n>.md`.
- **Pode escrever:** `qa/review-playbook-<n>.md`.
- **Foco:** seções obrigatórias na ordem, checklist da categoria, fidelidade ao briefing, aviso legal.
- **Não pode:** sugerir mudança de escopo; isso é do Planner.

## Revisor visual

- **Entrada:** `site/` aberto no navegador.
- **Saída:** `qa/review-visual-<n>.md` + prints em `qa/prints/`.
- **Pode escrever:** `qa/review-visual-<n>.md`, `qa/prints/`.
- **Foco:** 360/768/1280, hierarquia, espaço, legibilidade, o que quebra e o que parece amador.
- **Não pode:** opinar sobre gosto sem apontar o problema concreto.

## Validador

- **Entrada:** `site/`.
- **Saída:** `qa/validators-<n>.json`.
- **Foco:** HTML válido, links, assets, peso, dados inventados.
- **Não pode:** julgamento subjetivo. Script não opina.

## Docs

- **Entrada:** projeto inteiro.
- **Saída:** `README.md` do projeto + entrada em `docs/entregas.md`.
- **Pode escrever:** `README.md` do projeto, `docs/entregas.md`.
- **Pronto quando:** dá para editar o site e publicar seguindo só o README.

---

## Formato único de achado

Todo revisor escreve assim, sem exceção:

```
- [BLOCKER] site/index.html:42 — botão de WhatsApp aponta para número sem DDI — usar wa.me/5511...
- [MAJOR]   site/css/style.css:118 — contraste 3.1:1 no texto do hero — escurecer overlay
- [MINOR]   site/index.html:9 — título com 78 caracteres — encurtar para 60
```

Sem arquivo, linha e correção esperada, o achado é descartado na triagem.
