const produto = {
    nomeProduto: "Teclado",
    preco: 150
};

// nomeProduto é armazenado na variável "nome"
// estoque é armazenado em "quantidade", com valor padrão 0
const { nomeProduto: nome, estoque: quantidade = 0 } = produto;

console.log(nome);
console.log(quantidade);