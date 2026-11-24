# Assets — Sport Show Ribas Esportes

Lista de imagens e materiais visuais reais necessários para substituir os placeholders (`<div class="img-placeholder">`) em `site/index.html`.

Salve os arquivos originais em `../../imagens/` e as versões otimizadas (`.webp` com fallback `.jpg` ou `.png`) nesta pasta (`site/assets/`).

## Placeholders a substituir

| Arquivo sugerido | Onde é usado no `index.html` | Texto atual do placeholder | Especificação recomendada |
| --- | --- | --- | --- |
| `logo.png` (ou `logo.svg`) | Header (`.img-placeholder--logo`) e Footer (`.img-placeholder--footer-logo`), além de `<link rel="icon">` | `[Logo]` | Logo oficial em fundo transparente (mín. 256×256 px). |
| `hero-quadras-1600.webp` | Seção Hero (`.img-placeholder--hero`) | `[Foto da quadra]` | Foto aérea ou ampla mostrando as quadras do complexo (proporção ~4:3 ou 16:9, larg. máx. 1600–1920 px). Não usar `loading="lazy"`. |
| `quadra-grama-sintetica-800.webp` | Seção Quadras e estrutura — Card 01 (`.img-placeholder--card`) | `[Foto da quadra de grama sintética]` | Foto real da quadra de futebol/futsal/society iluminada ou em jogo (proporção 16:10, larg. ~800–1200 px). |
| `quadra-areia-800.webp` | Seção Quadras e estrutura — Card 02 (`.img-placeholder--card`) | `[Foto da quadra de areia]` | Foto real das quadras de beach tennis, futevôlei e vôlei de praia (proporção 16:10, larg. ~800–1200 px). |
| `bar-convivencia-800.webp` | Seção Quadras e estrutura — Card 03 (`.img-placeholder--card`) | `[Foto do bar e espaço de convivência]` | Foto real do bar e área de confraternização pós-jogo (proporção 16:10, larg. ~800–1200 px). |
| `og.jpg` | Meta tag `og:image` no `<head>` (adicionar após obter foto real) | — | Imagem para compartilhamento em redes sociais (1200×630 px). |

## Dados adicionais do briefing pendentes de confirmação com o cliente
- Tabela real de valores por dia/faixa de horário (para substituir o aviso "Consulte valores pelo WhatsApp")
- Formas de pagamento aceitas (Pix, cartão, dinheiro) e política de sinal/cancelamento
- Confirmação do horário de funcionamento (08h às 00h seg–dom) e último horário reservável
- Confirmação do perfil oficial no Instagram (`@ribasesportes`)
