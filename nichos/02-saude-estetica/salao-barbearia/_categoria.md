# Playbook — Salão / Barbearia

**Objetivo:** agendamento de horário.
**Público:** quem quer marcar um corte/tratamento e ver preço antes de ligar.
**Promessa:** "sei quanto custa, vejo o trabalho e marco em 1 toque".

## Seções (nesta ordem)
1. **Hero** — nome, posicionamento curto, foto do ambiente ou de um trabalho, botão `Agendar horário`.
2. **Serviços e preços** — tabela: serviço, duração, preço. Agrupado por categoria (corte, cor, barba, estética).
3. **Galeria** — 6 a 9 fotos de trabalhos reais (antes/depois quando houver).
4. **Profissionais** — foto, nome, especialidade.
5. **Agendamento** — link de agenda (se houver) + WhatsApp.
6. **Horários** — por dia da semana.
7. **Localização** — endereço, mapa, referência.

## CTA
- Principal: `Agendar no WhatsApp` (ou link de agenda quando o briefing trouxer).
- Secundário: `Ver preços`.
- No hero, na seção 5 e no rodapé.

## Tom de voz
Confiante e próximo, com personalidade da marca. Pode ser informal, mas nunca vulgar.

## Direção visual padrão
- Paleta: preto `#101010`, cobre `#C08A4E`, areia `#F2EDE6`.
- Fontes: `Oswald` (títulos) + `Inter` (texto).
- Lucide: `scissors`, `sparkles`, `calendar`, `instagram`, `map-pin`, `clock`.
- AOS: `fade-up` em seções, `zoom-in` na galeria, `once: true`.
- Hero: foto escura em tela cheia, tipografia grande, linha de acento cobre.

## Checklist específico
- [ ] Preço e duração em toda linha de serviço.
- [ ] Galeria com `alt` descritivo e `loading="lazy"`.
- [ ] Se houver link de agenda externo, abrir em nova aba com `rel="noopener"`.
- [ ] Horários completos, inclusive dias fechados ("fechado" explícito).
- [ ] Instagram linkado quando informado.

## Briefing mínimo aceitável
nome · cidade · serviços com preço e duração · 6 fotos de trabalho · endereço · horário · WhatsApp ou link de agenda · Instagram.
