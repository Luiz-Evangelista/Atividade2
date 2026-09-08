// Cria a função CardProduto e desestrutura titulo e preco dos parâmetros
function CardProduto({ titulo, preco }) {

    return `
        <div>
            // Mostra o título do produto
            <h3>${titulo}</h3>

            // Mostra o preço do produto
            <p>R$ ${preco}</p>

            // Cria o botão de compra
            <button>Comprar</button>
        </div>
    `;
}