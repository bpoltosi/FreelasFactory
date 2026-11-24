# Catálogo de nichos e categorias — v0.1

Cada **nicho** agrupa categorias que compartilham estrutura, tom e tipo de prova social.
Cada **categoria** tem um playbook com: seções obrigatórias (na ordem), seções opcionais, CTA principal, tom de voz, provas, hero padrão e paleta base.

## 1. Alimentação
| Categoria | Seções obrigatórias | CTA principal | Tom |
|---|---|---|---|
| Restaurante / Delivery | Hero, Cardápio, Sobre, Pedido/Delivery, Horários, Localização, Depoimentos | Pedir no WhatsApp | Apetitoso, direto |
| Docerias | Hero, Vitrine, Sabores, Como encomendar, Depoimentos, Entrega, FAQ | Encomendar no WhatsApp | Afetivo, artesanal |

## 2. Saúde e estética
| Categoria | Seções obrigatórias | CTA principal | Tom |
|---|---|---|---|
| Clínica / Saúde | Hero, Especialidades, Equipe, Estrutura, Agendamento, Convênios, Depoimentos, FAQ | Agendar consulta | Confiável, técnico sem jargão |
| Salão / Barbearia | Hero, Serviços e preços, Galeria, Profissionais, Agendamento, Horários, Localização | Agendar horário | Estilo, próximo |

## 3. Esporte e lazer
| Categoria | Seções obrigatórias | CTA principal | Tom |
|---|---|---|---|
| Academias | Hero, Modalidades, Planos, Estrutura, Professores, Aula experimental, Depoimentos | Aula experimental grátis | Motivador, energético |
| Quadras esportivas | Hero, Quadras e estrutura, Valores por horário, Reserva, Regras, Localização | Reservar quadra | Prático, esportivo |

## 4. Comércio
| Categoria | Seções obrigatórias | CTA principal | Tom |
|---|---|---|---|
| Lojas | Hero, Categorias, Destaques, Sobre, Como comprar, Pagamento e entrega, Localização | Falar no WhatsApp / Visitar | Vendedor, claro |

## 5. Serviços profissionais
| Categoria | Seções obrigatórias | CTA principal | Tom |
|---|---|---|---|
| Advocacia | Hero, Áreas de atuação, Sobre e equipe, Contato, OAB, Aviso legal | Agendar consulta | Sóbrio, sóbrio-autoridade (sem promessa de resultado) |

Playbooks completos: `nichos/<nicho>/<categoria>/_categoria.md` (fonte única de verdade).
Estrutura de pastas: ver `README.md`.

## Regras que valem em todos os nichos
- Toda categoria herda o checklist base do spec (responsivo, acessibilidade, performance, CTA repetido).
- Prova social é obrigatória: 3 depoimentos (ou "sem depoimentos" → seção omitida e anotada no relatório).
- Preço só aparece se o briefing tiver preço; nunca inventar valores.
- Foto só do briefing; sem foto → placeholder geométrico com a paleta, nunca banco de imagens genérico.
- Aviso legal obrigatório: advocacia, saúde (resultados variam) e alimentação (alergênicos).
