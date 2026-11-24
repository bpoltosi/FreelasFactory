# projetos/

Um diretório por cliente: `slug-do-cliente/`.

## Criar um projeto
1. Copiar `site-factory/_templates/projeto` para cá e renomear com o slug.
2. Preencher `briefing.md` com os dados do cliente.
3. Colocar dados em `dados/` e imagens em `imagens/`.
4. Seguir o ciclo do `site-factory/README.md`.

## Estrutura de cada projeto
```
slug-do-cliente/
  briefing.md
  plano.md
  qa.md
  dados/
  imagens/
  site/          <- entrega
```

## Regras
- Slug em minúsculas, sem acento, com hífen.
- Um cliente por pasta; variações viram `slug-do-cliente-v2/`.
- Projeto sem `briefing.md` completo não avança para `plano.md`.
