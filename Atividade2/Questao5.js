const alunos = [
    { nome: "Ana", curso: "TSI" },
    { nome: "Bruno", curso: "Redes" },
    { nome: "Carla", curso: "Analise de dados" },
];

// Desestrutura nome e curso diretamente no parâmetro da função
const resultado = alunos.map(({ nome, curso }) => {
    return `${nome} - ${curso}`;
});

console.log(resultado);