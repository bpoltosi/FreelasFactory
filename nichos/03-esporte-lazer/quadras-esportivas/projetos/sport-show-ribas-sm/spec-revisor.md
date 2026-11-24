# Task: Revisor — Sport Show Ribas Esportes

Você é um revisor independente de sites para a FreelasFactory.
O builder já criou o site. Sua missão: checar se está correto antes do PR.

## Repositório
`C:\Users\Isaque\.orca\bots\fa-brica-de-sites\FreelasFactory`

## Arquivos a revisar (no worktree do builder — leia pelo caminho absoluto)
- `C:\Users\Isaque\orca\workspaces\FreelasFactory\builder-sport-show\nichos\03-esporte-lazer\quadras-esportivas\projetos\sport-show-ribas-sm\site\index.html`
- `C:\Users\Isaque\orca\workspaces\FreelasFactory\builder-sport-show\nichos\03-esporte-lazer\quadras-esportivas\projetos\sport-show-ribas-sm\site\css\style.css`
- `C:\Users\Isaque\orca\workspaces\FreelasFactory\builder-sport-show\nichos\03-esporte-lazer\quadras-esportivas\projetos\sport-show-ribas-sm\site\js\main.js`
- `C:\Users\Isaque\orca\workspaces\FreelasFactory\builder-sport-show\nichos\03-esporte-lazer\quadras-esportivas\projetos\sport-show-ribas-sm\site\assets\README.md`

## Briefing (referência dos dados corretos)
`C:\Users\Isaque\.orca\bots\fa-brica-de-sites\FreelasFactory\nichos\03-esporte-lazer\quadras-esportivas\projetos\sport-show-ribas-sm\briefing.md`

## Playbook da categoria
`C:\Users\Isaque\.orca\bots\fa-brica-de-sites\FreelasFactory\nichos\03-esporte-lazer\quadras-esportivas\_categoria.md`

## Checklist de revisão (verifique CADA item)

### 1. Dados do cliente
- [ ] Nome correto: "Sport Show Ribas Esportes"
- [ ] Endereço correto: Av. Liberdade, 726 – Bairro Patronato, Santa Maria/RS, CEP 97020-490
- [ ] WhatsApp correto: +55 55 99976-8685 em TODOS os links (formato: `https://wa.me/5555999768685`)
- [ ] Link Google Maps presente e apontando para o endereço correto

### 2. Seções obrigatórias (nesta ordem)
- [ ] 1. Header com nav e CTA
- [ ] 2. Hero com nome, tipos de quadra, botão WhatsApp
- [ ] 3. Marquee animado
- [ ] 4. Cards de quadras e estrutura (grama sintética, areia, bar)
- [ ] 5. Seção de valores — apenas "Consulte pelo WhatsApp" (SEM preços inventados)
- [ ] 6. Como reservar — 3 passos
- [ ] 7. Horário de funcionamento (Seg–Dom 08h–00h)
- [ ] 8. Localização com endereço e mapa
- [ ] 9. Footer

### 3. Regras anti-invenção
- [ ] ZERO preços inventados
- [ ] ZERO depoimentos inventados
- [ ] ZERO nomes de pessoas inventados
- [ ] Placeholders visuais usando `<div class="img-placeholder">` ou equivalente, NÃO imagens inexistentes com src quebrado

### 4. Stack técnica
- [ ] Google Fonts: Space Grotesk + Inter carregadas
- [ ] AOS 2.3.4 via CDN unpkg
- [ ] Lucide via CDN
- [ ] `main.js` inicializa AOS e Lucide
- [ ] Menu mobile funcional (toggle)
- [ ] Skip-link de acessibilidade presente
- [ ] `lang="pt-BR"` no html
- [ ] Meta description presente
- [ ] `prefers-reduced-motion` tratado no CSS

### 5. Paleta
- [ ] Verde quadra #1B7F4B nos CTAs primários
- [ ] Fundo escuro grafite #1F2421
- [ ] Texto branco #FFFFFF

## Resultado esperado
Produza um relatório em formato markdown com:
1. Itens **aprovados** ✅
2. Itens **reprovados** ❌ com descrição exata do problema e linha do arquivo
3. **Veredicto final**: APROVADO ou REPROVADO

Se REPROVADO: liste as correções necessárias de forma objetiva (máx 5 linhas cada).
Se APROVADO: diga "Aprovado — pode abrir PR".

## Done means
- Relatório completo enviado ao coordenador via worker_done
- Veredicto claro: APROVADO ou REPROVADO com lista de correções
