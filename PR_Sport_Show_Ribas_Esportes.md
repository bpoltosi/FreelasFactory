# PR: Site Sport Show Ribas Esportes — Quadras Esportivas (Santa Maria/RS)

## Resumo
Site estático completo para o **Sport Show Ribas Esportes**, complexo esportivo no bairro Patronato, Santa Maria/RS, com quadras de grama sintética (futebol/futsal/society), quadras de areia (beach tennis, futevôlei, vôlei de praia) e bar para confraternização pós-jogo.

## Entregáveis
4 arquivos criados em `nichos/03-esporte-lazer/quadras-esportivas/projetos/sport-show-ribas-sm/site/`:
- `index.html` — HTML semântico com 9 seções na ordem do playbook
- `css/style.css` — CSS vanilla com variáveis CSS, AOS + Lucide
- `js/main.js` — Inicialização AOS, Lucide, menu mobile, smooth scroll
- `assets/README.md` — Lista de 11 placeholders de foto para substituição pelo cliente

## Seções implementadas (ordem do playbook)
1. **Header** — Logo texto "Sport Show | Ribas Esportes", nav, CTA WhatsApp
2. **Hero** — Nome, tipos de quadra, overlay verde #1B7F4B, placeholder foto aérea, botão "Reservar no WhatsApp"
3. **Marquee** — Palavras-chave animadas: "Futebol · Beach Tennis · Futevôlei · Vôlei de Praia · Patronato · Santa Maria/RS"
3. **Quadras e estrutura** — 3 cards (Grama Sintética, Areia, Bar e Convivência) com ícones Lucide + link WhatsApp
4. **Valores por horário** — Aviso claro: "Consulte valores pelo WhatsApp — preços variam por dia e horário" + botão primário
5. **Como reservar** — 3 passos visuais: Escolher → Confirmar no WhatsApp → Jogar
6. **Horário de funcionamento** — Tabela Seg–Dom 08h–00h + nota de confirmação via WhatsApp
7. **Localização** — Endereço completo, Google Maps embed, referência "próximo ao Estádio Presidente Vargas"
8. **Footer** — Nome, endereço, WhatsApp, copyright 2026

## Stack técnica
- HTML5 semântico, CSS vanilla, JS vanilla
- Google Fonts: `Space Grotesk` (títulos) + `Inter` (corpo)
- AOS 2.3.4 (CDN unpkg) + Scroll-driven Animations (fallback)
- Lucide Icons (CDN)
- Sem frameworks, sem build tools

## Paleta (playbook categoria quadras-esportivas)
- Verde quadra: `#1B7F4B` (acento/CTA)
- Grafite: `#1F2421` (fundo escuro)
- Branco: `#FFFFFF` (texto principal)
- Surface leve: `#242b27`

## Dados do cliente (conforme briefing)
- WhatsApp: +55 55 99976-8685
- Link CTA: `https://wa.me/5555999768685?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20quero%20reservar%20uma%20quadra.`
- Endereço: Av. Liberdade, 726 – Bairro Patronato, Santa Maria/RS, CEP 97020-490
- Google Maps: `https://maps.google.com/?q=Av.+Liberdade,+726,+Patronato,+Santa+Maria,+RS`
- Horário: Seg–Dom 08h–00h (fonte pública, nota de confirmação incluída)
- Instagram provável: @ribasesportes (não confirmado — incluído como placeholder)

## Regras absolutas respeitadas
- ✅ Nenhum preço inventado
- ✅ Nenhum depoimento inventado
- ✅ Placeholders `<div class="img-placeholder">` com fundo `#1B7F4B22` e texto indicativo
- ✅ WhatsApp link correto em todos os CTAs
- ✅ Acessibilidade: skip-link, aria-labels, prefers-reduced-motion
- ✅ Schema.org `SportsActivityLocation` JSON-LD incluído

## Placeholders abertos (aguardam cliente)
Ver `assets/README.md` — 11 itens:
- 4 obrigatórias: hero aérea, quadra grama, quadra areia, bar/convivência
- 4 complementares: fachada, entrada, vestiário, estacionamento
- 2 identidade: logo.png, og.jpg (1200×630)
- Instagram oficial a confirmar

## Próximos passos
1. Cliente envia fotos reais → substituir placeholders
2. Cliente confirma horário, formas de pagamento, política de cancelamento
3. Deploy (Netlify/Vercel/GitHub Pages)

---

**Base commit:** `86a5b3b` — feat: adiciona projeto Sport Show Ribas Esportes
**Branch atual:** `feat/sport-show-ribas-sm`