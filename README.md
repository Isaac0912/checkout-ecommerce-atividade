# Checkout e-commerce

## Descrição

Um algoritmo de checkout com funções de subtotal utilizando laços, cupom com estrutura condicional e uma função de total que retorna um objeto com propriedade subtotal, desconto e total. Com testes de uma variável `itens` de arrays com objetos como entrada.

### Objetivo

O objetivo é versionar o algoritmo utilizando uma maneira correta de desenvolver o código em equipe com ramificações, sem sobrescrever o código e causar erros críticos no sistema.

---

## Estrutura das Pastas

```text
checkout-ecommerce-atividade/
├── checkout.js
├── .gitignore
└── README.md
```

### Descrição dos arquivos

- checkout.js: Algoritmo e lógica. Contém as funções, laços e a estrutura condicional. a função `calcularSubtotal(itens)` declara variáveis `preco`, `quantidade` e `subtotal` como números. É realizado um laço de for que percorre o parâmetro itens até seu limite (.length), atribuindo as variáveis preco e quantidade o valor das propriedades para a cada iteração a variável subtotal fazer o calculo do preço e quantidade atual e atribuir utilizando o operador +=. Depois do laço, subtotal é retornado.
a função contarItens(itens) percorre o parâmetro com laço de for para atribuir uma variável de quantidade o valor da propriedade da quantidade do parâmetro e retorna esse número salvo na variável.
a função aplicarCupom(cupom, subtotal) utiliza estrutura condicional para ver qual é a entrada do cupom e realizar o return do desconto compatível, se não, retorna 0.
a função finalizarCompra(itens, codigoCupom) chama as outras funções utilizando o parâmetro de entrada da função para salvar na variável `subtotal` e `desconto`. É delcarado uma variável de objeto vazia nomedada `compra` para ser preenchida depois com novas propriedades que recebem o valor retornado pelas funções na variável quer chamou eles (subtotal e desconto) e o total que calcula subtotal - desconto. A variável com objeto é retornada.
- .gitignore: Arquivo responsável para instruir o Git para ignorar arquivos e diretórios definidos.
- README.md: Docuementação sobre o algoritmo, estrutura, fluxo de branches, padronização e funcionamento.

---

## Como executar

### Pré-requisitos

- Git instalado.
- GitHub com conta cadastrada.
- Node.js instalado.
- IDE com suporte a JavaScript instalado.

### Etapas

1. No GitHub, entre no link do repositório e copie o https para clonar ou copie por meio deste link. [GitHub](https://github.com/Isaac0912/checkout-ecommerce-atividade.git).
2. No terminal, navegue para uma pasta que desejar clonar o repositório (recomendo em Documentos). No PowerShell:
```PowerShell
cd .\Pasta\
```
No bash:
```bash
cd Pasta/
```
3. No terminal, seja PowerShell, bash ou terminal integrado da sua IDE (como o Visual Studio Code) realize este comando:
```Git
git clone https://github.com/Isaac0912/checkout-ecommerce-atividade.git
```
Isso irá clonar o repositório na pasta que você navegou na etapa 2. Criando uma pasta com o nome do repositório e a branch principal.
4. Para pegar as outras branches remotas e levar para o local, faça:
```Git
git fetch origin
git branch -a
```
Isso mostrará uma saída como:
```text
* main
  origin/develop
  origin/feature/total
  origin/feature/cupom
```
Para poder entrar em uma dessas branches remotas, utilize essa estrutura:
```Git
git switch --track origin/nome-da-branch
```
Substitua `nome-da-branch` para a branch remmota que escolher.
5. Na sua IDE, abre a pasta `checkout-ecommerce-atvidade` para poder executar seus comandos.

### Comandos

Abaixo de testes, você pode executar `console.log(finalizarCompra(itens, codigoCupom))` temporariamente no final do algoritmo.

`itens` podem ser uma variável de objeto e array com objetos com propriedades obrigatórias: preco e quantidade. Sem elas as funções não funcionariam.

`codigoCupom` precisa ser uma string em maiúsculo, compátivel com as opções disponíveis ("DESC10", "DESC20", "FRETEGRATIS"), seja guardada em uma variável ou inserida diretamente no parâmetro.

Para executar verifique se o node já está instalado no terminal:
```terminal
node --version
```
Se retornar a versão, pode executar o arquivo dentro da pasta:
```terminal
node checkout.js
```

---

## Fluxo de Branches

O projeto utiliza três tipos de branches:

- `main`: A branch principal da versão do projeto estável e sem erros.
- `develop`: A branch principal das novas atualizações e versionamento. Utilizada para a integração e validação.
- `feature/*`: Branches criadas a partir da `develop`. Novas funcionalidades são, criadas e testadas isoladamente para depois ser revisadas para pull request na `develop`.

```text

feature/*
    │
    │ Pull Request / merge
    ▼
 develop
    │
    │ Merge após validação
    ▼
  main

```

O objetivo de realizar essa separação é para evitar mexer diretamente na `main` e `develop`, podendo causar conflitos, erros, sobrescrever o código e fazer um histórico de commits desorganizado. 
As `feature/*` funciona para criar e testar novas funcionalidades isoladamente no seu diretório local  para, depois, ser commitado e levado a pull request para outro colaborador responsável de revisar e autorizar as alterações na `develop`.
Após todas as funcionalidades e trabalho ser concluído, testado e verificado sua estabilidade e funcionamento, será realizado o merge na `main` como uma nova atualização.

## Prevenção do incidente em Git

Se os desenvolvedores da situação-problema estivessem utilizando o versionamento da maneira correta e organizada, não teriam sobrecarregado o arquivo e causado prejuízos financeiros.
O principal erro foi realizar as alterações no arquivo diretamente pela `main`, que deveria ser a versão estável do projeto. O que poderiam ter realizado era criar as branches `develop` para versionamento e orgnização antes de fazer merge na main e a `feature/*` para realizar as novas funcionalidades e testar, revisar e fazer pull request para `develop`.