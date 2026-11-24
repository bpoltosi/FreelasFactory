# dados/

Dados do cliente que o build consome. Texto puro ou JSON — nunca dentro do HTML antes de existir aqui.

| Arquivo | Conteúdo |
|---|---|
| `textos.md` | nome, slogan, sobre, diferenciais, tom de voz |
| `servicos.json` | serviços com preço, duração e descrição |
| `cardapio.json` | itens por categoria, preço, itens esgotados |
| `contato.json` | whatsapp, telefone, e-mail, endereço, horários |
| `depoimentos.md` | relatos reais, com autorização |
| `links.md` | Instagram, agenda externa, mapa, referências |

Regras:
- Sem valor → campo vazio, nunca estimado.
- WhatsApp sempre com DDI (`55...`).
- Horários em formato 24h, um bloco por dia.
