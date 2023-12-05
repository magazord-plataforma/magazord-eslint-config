# Magazord ESLint Config

*Pacote responsável por armazenar as configurações de Lint do Magazord.*

No momento existem apenas configurações para linting em aplicações React.. Futuramente, mais configurações podem 
ser criadas e exportadas neste pacote.

## Instalação

Para instalar, basta executar:


npm i -D eslint @mzrd/eslint-config


Em seguida, crie o arquivo `.eslintrc.json` na raiz do projeto contendo o seguinte código:


{
  "extends": "@mzrd/eslint-config"
}