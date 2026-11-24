# Orquestração de agentes para sites de negócios — spec

Plano de execução: `02-plano-execucao.md` · Catálogo: `01-catalogo-nichos.md`

**Problema**
Cada site para negócio começa do zero: briefing informal, decisões repetidas, qualidade varia por projeto. Não existe processo repetível nem padrão de "site bom".

**Decisão (proposta)**
Um sistema orquestrador que recebe um briefing (dados do negócio) + uma categoria pré-fixada, e aciona agentes especializados que produzem o site seguindo um plano padrão daquela categoria.

**Escopo — dentro**
- Catálogo de categorias de site (ex.: restaurante, clínica, advocacia, salão, serviço local), cada uma com seções obrigatórias, tom de voz e requisitos.
- Briefing de entrada padronizado (os "X dados").
- Pipeline: briefing → plano → conteúdo → design/build → QA → entrega.
- Checklist de aceite por categoria (o que define um site aprovado).

**Estrutura no disco**
Repo `FreelasFactory`: `_templates/projeto` (esqueleto de cliente) + `nichos/<nicho>/<categoria>/{_categoria.md, referencias/, projetos/}`.

**Stack de saída (decidido)**
- HTML + CSS puro (sem framework, sem build).
- JS vanilla para interações.
- Google Fonts (via CDN).
- AOS (Animate On Scroll) para animações de entrada.
- Lucide para ícones (SVG).
- Consequência: site estático, roda em qualquer hospedagem simples; cada projeto é uma pasta com `index.html`, `css/`, `js/`, `assets/`.

**Briefing X (decidido)**
| Bloco | Campos |
|---|---|
| Negócio | nome, categoria, cidade/região |
| Oferta | 3 serviços principais, diferenciais, público-alvo |
| Contato | WhatsApp, telefone, e-mail, endereço, redes sociais |
| Material | logo, fotos (ou "sem material" → usar placeholder) |
| Direção | tom de voz, referências visuais, objetivo principal (WhatsApp / ligação / agendamento) |

**Pipeline (proposta)**
| # | Etapa | Agente | Artefato de saída | Gate |
|---|---|---|---|---|
| 1 | Intake | Intake | `briefing.md` normalizado + categoria | Falta campo essencial? pergunta antes de seguir |
| 2 | Plano | Planner | `plano.md`: seções da página, copy skeleton, paleta/fontes | Aprovação humana |
| 3 | Conteúdo | Copy | textos finais de cada seção | QA de tom e tamanho |
| 4 | Build | Builder | `index.html`, `css/style.css`, `js/main.js`, `assets/` | — |
| 5 | QA | Reviewer | relatório contra o checklist da categoria | Reprova volta pro Build |
| 6 | Entrega | Reviewer | pasta final + `README` de como publicar | Aprovação humana |

**Checklist de aceite (base, igual em toda categoria)**
- Responsivo em 360 / 768 / 1280 px.
- Seções obrigatórias da categoria presentes e na ordem do playbook.
- CTA principal visível no hero e repetido ao menos 2× na página.
- Contato clicável (`tel:`, `wa.me`, `mailto:`, mapa).
- Acessibilidade mínima: `alt` em imagens, contraste AA, foco visível, `lang`.
- Performance: sem imagem > 500 KB, fontes com `display=swap`, JS sem dependência além de AOS.
- AOS usado só em entrada de seção (sem animação em loop).

**Escopo — fora (por ora)**
- Deploy/hospedagem automáticos, CMS próprio, autoatendimento pelo cliente final.

**Em aberto**
1. O orquestrador roda em quê: Orca workers, ou código próprio?
