# Playbook — Docerias

**Objetivo do site:** gerar encomenda no WhatsApp (não é loja com carrinho).
**Público:** quem encomenda bolo/doces para festa e presente, na cidade do negócio.
**Promessa da página:** "dá para ver o produto, saber o preço-base e pedir em 2 toques".

## Seções (nesta ordem)
1. **Hero** — nome da doceria, frase de posicionamento, foto do produto principal, botão `Encomendar no WhatsApp`. Selo pequeno: "feito no dia" / "entrega na região".
2. **Vitrine** — grid de 6 a 9 fotos com nome e preço-base (se houver). Sem foto: placeholder com paleta.
3. **Sabores / tamanhos** — tabela simples (ex.: bolo 15cm serve 12 fatias). Só o que o briefing informar.
4. **Como encomendar** — 3 passos numerados: escolher → chamar no WhatsApp → confirmar data e retirada/entrega.
5. **Depoimentos** — 3 cartões com nome + bairro (sem foto inventada).
6. **Entrega e horários** — bairros atendidos, prazo mínimo de encomenda, horário de funcionamento.
7. **Localização** — endereço + botão de mapa + telefone clicável.
8. **FAQ** — 4 perguntas: prazo, personalização, sinal/antecipo, alergênicos.

## CTA
- Principal: `Encomendar no WhatsApp` (link `wa.me` com mensagem pré-preenchida: "Olá! Vi o site e quero encomendar...").
- Secundário: `Ver sabores` (âncora para a seção 3).
- Aparece no hero, na seção 4 e na 8.

## Tom de voz
Afetivo e artesanal, 1ª pessoa do negócio ("a gente faz"), frases curtas, zero adjetivo vazio ("delicioso" só com foto que prove).

## Direção visual padrão
- Paleta: creme `#FBF6EF`, chocolate `#3E2A20`, acento rosa/terracota `#C97B63`.
- Fontes: `Fraunces` (títulos) + `Inter` (texto), via Google Fonts com `display=swap`.
- Ícones Lucide: `cake-slice`, `map-pin`, `clock`, `message-circle`, `star`, `truck`.
- AOS: `fade-up` em seções e `zoom-in` no grid da vitrine; uma vez só (`once: true`), duração 500–700ms.
- Hero: foto grande à direita, texto à esquerda no desktop; empilhado no mobile.

## Checklist específico da categoria
- [ ] Nenhum preço inventado; campo vazio se o briefing não trouxe.
- [ ] `wa.me` com DDI 55 e mensagem codificada.
- [ ] Aviso de alergênicos no rodapé.
- [ ] Grid da vitrine com `loading="lazy"` e `alt` descritivo.
- [ ] Nenhuma imagem de banco genérico.

## Briefing mínimo aceitável
nome · cidade · 6 fotos ou "sem foto" · 6 sabores · prazo de encomenda · bairros de entrega · WhatsApp · Instagram.
Sem isso, o Intake pergunta antes de gerar o plano.
