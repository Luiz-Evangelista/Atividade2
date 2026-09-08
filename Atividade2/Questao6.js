const usuario = {
    nome: "Pedro",
    endereco: {
        rua: "Av. Brasil",
        cidade: "João Pessoa",
        estado: "PB",
    },
};

// Acessa cidade e estado dentro de endereco
const { endereco: { cidade, estado } } = usuario;

console.log(cidade);
console.log(estado);