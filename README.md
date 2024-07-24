# Solar Shop
Solar Shop é um projeto de teste técnico para avaliação de capacidade profissional.

*Teste Técnico para Desenvolvedor Web*

*Objetivo:* 
Desenvolver uma loja ou catálogo online de produtos de energia solar utilizando Next.js e Tailwind CSS. O projeto deverá incluir funcionalidades de filtragem de produtos e um sistema de carrinho de compras.

*Descrição da Tarefa:*

1. *Página Inicial:*
   - Exibir uma listagem de produtos de energia solar.
   - Cada produto deve exibir o nome, imagem, tipo e preço.

2. *Filtros de Produtos:*
   - *Input de Nome:* Permitir que o usuário pesquise produtos pelo nome.
   - *Select de Tipo:* Permitir que o usuário filtre os produtos pelo tipo, com as seguintes opções: Inversores, Módulos, Estruturas, Elétricos.

3. *Detalhes dos Produtos:*
   - Ao clicar em um produto, deve ser exibida uma página com mais detalhes do produto.

4. *Carrinho de Compras:*
   - Possibilitar a adição de produtos ao carrinho.
   - Exibir o resumo do carrinho com a quantidade de itens e o valor total.
   - Permitir a remoção de produtos do carrinho.

5. *Pedido:*
   - Criar uma página para revisão do pedido com os produtos selecionados e seus respectivos valores.

*Requisitos Técnicos:*
- Utilizar *Next.js* para a criação da aplicação.
- Utilizar *Tailwind CSS* para estilização.
- Utilizar o estado local para gerenciamento do carrinho de compras.


## Como rodar o projeto

Primeiramente, certifique-se de que tenha instalado em sua máquina o NodeJs v.18+;

Execute os comandos a seguir para instalar as dependencias da aplicação:

```bash
npm instal
# ou
npm i
```

Para executar a aplicação, no terminal, execute o comando a seguir:

```bash
npm run dev
```
Caso encontre o erro: `'next' não é reconhecido como um comando interno
ou externo, um programa operável ou um arquivo em lotes.`, execute o comando `
npm install -g next
` e, após a instalação, execute novamente `npm run dev`.

Acesse a aplicação do seu navegador pelo http://localhost:[numero-da-porta]