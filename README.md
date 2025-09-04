# Previsão do Tempo

Este projeto é uma aplicação web simples para consultar condições do tempo em diferentes localidades. Desenvolvido com TypeScript, HTML, CSS e JavaScript puro.

## Funcionalidades

- Busca por localização (mínimo 3 letras)
- Validação de entrada
- Interface responsiva

## Estrutura do Projeto

```
index.html         # Página principal
package.json       # Dependências e scripts
css/styles.css     # Estilos
js/index.js        # Código JavaScript gerado pelo TypeScript
js/index.d.ts      # Tipagens geradas
js/index.js.map    # Mapas de source
js/index.d.ts.map  # Mapas de tipagem
previsao-do-tempo/ts/index.ts # Código fonte TypeScript
```

## Como rodar localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Compile o TypeScript:
   ```bash
   npx tsc
   ```
3. Abra o `index.html` no navegador.

## Como subir para o GitHub

1. Crie um repositório novo no GitHub.
2. Execute os comandos:
   ```bash
   git init
   git add .
   git commit -m "Primeiro commit"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
   git push -u origin main
   ```

## Licença

Este projeto é apenas para fins educacionais.
