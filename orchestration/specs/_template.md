# Spec de task — modelo

> Copie, preencha e passe com `--spec-file`. A spec precisa ser autossuficiente: o worker nasce sem contexto do projeto.

```
Projeto: <slug>
Caminho: nichos/<nicho>/<categoria>/projetos/<slug>/
Categoria: <categoria>
Playbook: nichos/<nicho>/<categoria>/_categoria.md
Fase: T<n> <nome>   Iteração: <n> de 3

Objetivo:
<o que precisa existir ao final, em 1–3 linhas>

Contexto mínimo:
<o que o worker precisa saber e não vai encontrar sozinho>

Você PODE editar:
- <caminho 1>
- <caminho 2>

Você NÃO PODE:
- editar qa/, plano.md, _categoria.md, docs/
- tocar em outro projeto
- adicionar dependência fora de HTML/CSS/JS + Google Fonts + AOS + Lucide

Passos:
1. <passo>
2. <passo>

Pronto quando:
- <critério verificável 1>
- <critério verificável 2>

Evidência obrigatória no worker_done:
- caminhos criados/alterados
- comandos rodados e saída
- o que ficou pendente, se houver
```

## Regras

- Todo critério de "pronto quando" tem que ser verificável por arquivo ou comando.
- Se o worker precisar de decisão de escopo, ele para e pergunta — não decide.
- Spec ambígua gera retrabalho: prefira citar o trecho do playbook a parafrasear.
