# Orquestração

Como um site sai do briefing e chega ao PR.

## Pré-requisitos

- Orca aberto (`orca status`).
- Conectores: `gh` autenticado (já conectado).
- Repo clonado e projeto com a estrutura de `nichos/`.

## Runbook de um projeto

```bash
# 1. Run
orca orchestration run-create --objective "site: <slug>"

# 2. Tasks (a DAG). Guarde o id de cada uma.
orca orchestration task-create --spec-file orchestration/specs/T1-intake.md  --task-title "T1 intake"
orca orchestration task-create --spec-file orchestration/specs/T2-plano.md   --task-title "T2 plano"   --deps '["<T1>"]'
orca orchestration task-create --spec-file orchestration/specs/T3-copy.md    --task-title "T3 copy"    --deps '["<T2>"]'
orca orchestration task-create --spec-file orchestration/specs/T4-build.md   --task-title "T4 build"   --deps '["<T3>"]'
orca orchestration task-create --spec-file orchestration/specs/T5-code.md    --task-title "T5 code"    --deps '["<T4>"]'
orca orchestration task-create --spec-file orchestration/specs/T5-playbook.md --task-title "T5 playbook" --deps '["<T4>"]'
orca orchestration task-create --spec-file orchestration/specs/T5-visual.md  --task-title "T5 visual"  --deps '["<T4>"]'
orca orchestration task-create --spec-file orchestration/specs/T6-fix.md     --task-title "T6 fix"
orca orchestration task-create --spec-file orchestration/specs/T7-docs.md    --task-title "T7 docs"
```

```bash
# 3. Workers — 1 por task, agente do papel
orca orchestration worker-start --environment local --task <T1> --worktree current --agent copilot
orca orchestration worker-start --environment local --task <T2> --worktree current --agent claude
orca orchestration worker-start --environment local --task <T3> --worktree current --agent claude
orca orchestration worker-start --environment local --task <T4> --worktree current --agent codex
```

```bash
# 4. Fan-out de revisão: disparar os 3 no mesmo lote (limite ~4 por vez)
orca orchestration worker-start --environment local --task <T5-code>     --worktree current --agent claude &
orca orchestration worker-start --environment local --task <T5-playbook> --worktree current --agent grok &
orca orchestration worker-start --environment local --task <T5-visual>   --worktree current --agent antigravity &
wait
```

```bash
# 5. Loop: só depois de ler os 3 relatórios
orca orchestration worker-start --environment local --task <T6> --worktree current --agent codex
```

## Regras de operação

- **Um escritor por vez.** Nunca dois workers com permissão de escrita no mesmo caminho.
- **Revisores são read-only.** Se um revisor editar `site/`, o resultado é descartado.
- **Worker pergunta (`question`):** responda com `reply` se a resposta está no briefing/plano; senão pare e pergunte ao owner.
- **Worker parou sem `worker_done` (`escalation`):** leia `worker-read`, decida entre `send` com instrução e retry.
- **Nunca reinicie um worker perdido com o mesmo prompt** — corrija a spec antes.
- **Cap de 3 iterações**, depois `blocked` + resumo ao owner.

## Estado do projeto

`project.json` no diretório do projeto:

```json
{
  "slug": "doceria-bolo-da-praca",
  "nicho": "01-alimentacao",
  "categoria": "docerias",
  "fase": "review",
  "iteracao": 1,
  "status": "in_progress",
  "run_id": "...",
  "tasks": { "T1": "...", "T4": "..." },
  "findings": { "blocker": 0, "major": 2, "minor": 5 },
  "gates": { "plano": "aprovado em 2026-11-24", "entrega": null }
}
```

## Automação (M2)

O orquestrador é hoje uma sessão conduzida manualmente. Depois vira um bot com:

1. `run-create` + `task-create` a partir de `project.json`;
2. loop de inbox: `orca orchestration inbox --terminal run:<id>`;
3. triagem automática por severidade;
4. gate humano via `gate-create` / `gate-resolve`.
