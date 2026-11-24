# Playbook — Restaurante / Delivery

**Objetivo:** pedido no WhatsApp ou por telefone. Cardápio legível no celular em < 10s.
**Público:** quem está com fome agora, decidindo entre 2–3 opções no celular.
**Promessa:** "abre, vê o prato, pede".

## Seções (nesta ordem)
1. **Hero** — nome, tipo de cozinha, foto do prato assinatura, botão `Pedir agora`. Badge de status (aberto/fechado).
2. **Cardápio** — abas por categoria (entradas, pratos, bebidas, sobremesas); item com nome, descrição de 1 linha, preço. Itens esgotados com selo.
3. **Sobre** — 3 linhas: história, quem cozinha, o que diferencia.
4. **Pedido / Delivery** — área atendida, taxa, tempo médio, mínimo; botão WhatsApp + telefone.
5. **Horários** — tabela por dia da semana.
6. **Localização** — endereço, mapa, estacionamento.
7. **Depoimentos** — 3 avaliações curtas.

## CTA
- Principal: `Pedir no WhatsApp` (`wa.me` com "Olá! Quero fazer um pedido").
- Secundário: `Ver cardápio` (âncora).
- No hero, no fim do cardápio, na seção 4.

## Tom de voz
Direto e apetitoso. Descrição de prato com ingrediente, não com adjetivo ("costela desfiada, purê de mandioquinha" > "deliciosa costela").

## Direção visual padrão
- Paleta: carvão `#14100E`, terracota `#E4572E`, creme `#F7F3EE`.
- Fontes: `Anton` (títulos) + `Inter` (texto), `display=swap`.
- Lucide: `utensils`, `bike`, `clock`, `map-pin`, `phone`, `star`.
- AOS: `fade-up` em seções, `flip-up` nos cards do cardápio, `once: true`.
- Hero: foto em tela cheia com overlay escuro e texto sobreposto; botão laranja.

## Checklist específico
- [ ] Preço com `R$` e vírgula; nenhum item sem preço se o briefing trouxe tabela.
- [ ] Badge aberto/fechado calculado por JS com o horário do briefing (sem API).
- [ ] Aviso de alergênicos no rodapé.
- [ ] Cardápio funcionando em 360px sem scroll horizontal.
- [ ] `wa.me` com DDI 55 e mensagem codificada.

## Briefing mínimo aceitável
nome · cidade · cozinha · 12+ itens com preço · horário por dia · área de entrega e taxa · WhatsApp · 4 fotos.
