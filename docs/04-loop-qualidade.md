# Loop de qualidade

Objetivo: **nunca entregar código disfuncional**. O loop não termina por tempo nem por opinião — termina por evidência.

## Estados

```
planned → building → validating → reviewing → triage
             ▲                        │          │
             │                        │          ├─ limpo → approved → delivered
             └──────── fixing ◄───────┴──────────┘
                                   (máx. 3 voltas)
                                        │
                                    blocked → humano
```

## Ordem de execução de uma volta

1. **Validadores** (segundos, determinísticos). Falhou → volta direto para o build, sem gastar revisor.
2. **Fan-out de revisão** (paralelo): código, playbook, visual.
3. **Triagem** (orquestrador): deduplica, confirma severidade, separa o que é bug de opinião.
4. **Fix** (um builder só): aplica apenas os itens confirmados.
5. **Re-check seletivo**: roda só o que falhou na volta anterior.

## Critério de saída

| Condição | Resultado |
|---|---|
| 0 BLOCKER, 0 MAJOR, validadores verdes | `approved` |
| Só MINOR pendente | `approved` + backlog |
| BLOCKER/MAJOR após a 3ª volta | `blocked` + escalonamento |
| Revisor e builder discordam sem evidência | orquestrador decide; sem evidência, item vira MINOR |

## Severidade

- **BLOCKER** — página quebra, link principal morto, dado falso, seção obrigatória ausente, aviso legal faltando.
- **MAJOR** — falha item do checklist da categoria, contraste abaixo de AA, `alt` faltando, CTA fora do hero.
- **MINOR** — espaçamento, texto que pode melhorar, ordem de elementos não obrigatória.

## Anti-trapaça

- Builder não escreve em `qa/` — relatório é do revisor.
- Revisor não escreve em `site/` — correção é do builder.
- Ninguém edita `_categoria.md` durante um projeto. Se o playbook está errado, o projeto para e o playbook é corrigido em PR separado.
- Revisor que não citar arquivo e linha tem o achado descartado.

## Escalonamento

Ao virar `blocked`, o orquestrador entrega ao humano:

1. o que ainda falha (BLOCKER/MAJOR);
2. as 3 tentativas e o que cada uma mudou;
3. a decisão que falta (escopo, dado do cliente, ou aceitar o desvio).

Nunca "resolver" escalando para o mesmo agente com o mesmo prompt.

## Custo

- Validador primeiro: evita 3 revisores caros em site quebrado.
- Revisor de playbook e docs em modelo médio.
- Builder e revisor de código em modelo forte.
- Re-check seletivo na 2ª e 3ª volta.
