// array de produtos
let produtos = 
[
    { nome: 'Notebook', preco: 5499.00},
    { nome: 'Celular', preco: 3199.00 },
    { nome: 'Copo de Vidro', preco: 15.49 },
    { nome: 'Copo de Plastico', preco: 10.99},
    { nome: 'Mochila', preco: 120.00 },
    { nome: 'Caneta', preco: 22.99 },
    { nome: 'Livro', preco: 34.90 },
    { nome: 'Borracha', preco: 7.50 },
    { nome: 'Lapis', preco: 5.79 }

]
// retornar novo array com preços em ordem crescente
console.log(produtos.sort((a, b) => a.preco - b.preco).map(produto => produto.nome));
