# Task: Builder — Sport Show Ribas Esportes

Você é um builder de sites para a FreelasFactory.
Sua missão: criar o site estático completo do cliente Sport Show Ribas Esportes.

## Repositório
`C:\Users\Isaque\.orca\bots\fa-brica-de-sites\FreelasFactory`

## Pasta de entrega
`nichos/03-esporte-lazer/quadras-esportivas/projetos/sport-show-ribas-sm/site/`

## Briefing (leia antes de escrever qualquer linha)
`nichos/03-esporte-lazer/quadras-esportivas/projetos/sport-show-ribas-sm/briefing.md`

## Playbook da categoria (siga à risca)
`nichos/03-esporte-lazer/quadras-esportivas/_categoria.md`

## Referência de gramática visual (use a mesma stack)
Leia o site já pronto da Premium Academia:
- `nichos/03-esporte-lazer/academias/projetos/premium-academia-sm/site/index.html`
- `nichos/03-esporte-lazer/academias/projetos/premium-academia-sm/site/css/style.css`
- `nichos/03-esporte-lazer/academias/projetos/premium-academia-sm/site/js/main.js`

## Stack obrigatória (mesma da Premium Academia)
- HTML5 semântico, CSS vanilla, JS vanilla
- Google Fonts: `Space Grotesk` (títulos) + `Inter` (corpo)
- AOS 2.3.4 (via CDN unpkg)
- Lucide Icons (via CDN)
- Sem frameworks, sem build tools

## Paleta (playbook da categoria)
- Verde quadra: `#1B7F4B` (acento/CTA)
- Grafite: `#1F2421` (fundo escuro)
- Branco: `#FFFFFF` (texto principal)
- Surface leve: `#242b27`

## Seções obrigatórias (nesta ordem, conforme playbook)
1. **Header** — logo texto ("Sport Show | Ribas Esportes"), nav links, botão CTA
2. **Hero** — nome, tipos de quadra, overlay verde sobre fundo-gradiente (sem foto real), botão `Reservar no WhatsApp`
3. **Marquee** — palavras-chave animadas: "Futebol · Beach Tennis · Futevôlei · Vôlei de Praia · Patronato · Santa Maria/RS"
4. **Quadras e estrutura** — 3 cards: Grama Sintética, Areia (beach tennis / futevôlei / vôlei), Bar e Espaço de Convivência. Cada card: ícone Lucide + nome + descrição curta + link WhatsApp
5. **Valores por horário** — AVISO CLARO: "Consulte valores pelo WhatsApp — preços variam por dia e horário." Botão primário para WhatsApp. NÃO invente preços.
6. **Como reservar** — 3 passos visuais: (1) Escolha o dia e horário → (2) Confirme pelo WhatsApp → (3) Jogue!
7. **Horário de funcionamento** — tabela simples: Seg–Dom 08h às 00h (fonte: dados públicos online; adicionar nota "Consulte disponibilidade de quadra pelo WhatsApp")
8. **Localização** — endereço completo, link Google Maps, referência "próximo ao Estádio Presidente Vargas"
9. **Footer** — nome, endereço, WhatsApp, copyright 2024

## Dados do cliente
- Nome: Sport Show Ribas Esportes
- Endereço: Av. Liberdade, 726 – Bairro Patronato, Santa Maria/RS, CEP 97020-490
- WhatsApp: +55 55 99976-8685
- Link WhatsApp CTA principal: `https://wa.me/5555999768685?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20quero%20reservar%20uma%20quadra.`
- Link Google Maps: `https://maps.google.com/?q=Av.+Liberdade,+726,+Patronato,+Santa+Maria,+RS`
- Horário: Seg–Dom, 08h às 00h
- Instagram provável: @ribasesportes (não confirmado — coloque como "Instagram" com link `https://instagram.com/ribasesportes`)

## Regras absolutas
- NÃO invente preços, depoimentos, nomes de pessoas, histórico ou fotos
- Onde falta foto real, use um `<div class="img-placeholder">` com fundo verde escuro (#1B7F4B22) e texto centralizado indicando "[Foto da quadra]", "[Logo]", etc.
- Preços: apenas "Consulte pelo WhatsApp" com botão
- Depoimentos: omitir a seção completamente
- Siga o padrão de acessibilidade da Premium Academia: skip-link, aria-labels, reduced-motion

## Arquivos a criar
1. `site/index.html` — HTML completo
2. `site/css/style.css` — CSS completo
3. `site/js/main.js` — JS (inicialização AOS, Lucide, menu mobile)
4. `site/assets/README.md` — lista de fotos reais necessárias para substituir os placeholders

## Done means
- Os 4 arquivos existem e estão completos
- `index.html` tem as 9 seções na ordem correta
- Nenhum preço inventado, nenhum depoimento inventado
- WhatsApp link correto em todos os CTAs
- CSS segue a mesma estrutura de variáveis da Premium Academia (adaptada para a nova paleta)
- `assets/README.md` lista todas as fotos placeholder que precisam ser substituídas
- Reporte ao coordenador (Fábrica de sites) com `worker_done` listando o que foi criado e os placeholders abertos
