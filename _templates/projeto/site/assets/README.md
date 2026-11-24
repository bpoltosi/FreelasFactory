# assets/

Imagens otimizadas que o site usa de fato. As originais ficam em `../../imagens/`.

- Formato: `.webp` com fallback `.jpg` quando necessário.
- Largura máx. 1600 px; hero pode usar 1920 px com `srcset`.
- Nome igual ao original, com sufixo de tamanho: `produto-bolo-chocolate-01-800.webp`.
- Toda imagem precisa de `alt` descritivo e `loading="lazy"` (exceto a do hero).
- Placeholder (cliente sem foto): geométrico SVG com a paleta do projeto — nunca imagem de banco.
