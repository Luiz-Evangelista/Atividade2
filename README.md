Explicação de como manipular Listas em JavaScript utilizando: map, filter e reduce:

O método map() é utilizado quando queremos percorrer todos os elementos de uma lista e criar uma nova lista a partir deles.

##Exemplo
```js
const numeros = [1, 2, 3, 4, 5];

// O map percorre a lista e multiplica cada número por 2
const dobro = numeros.map(numero => numero * 2);

// Mostra a nova lista no console
console.log(dobro);
//Resultado:[2, 4, 6, 8, 10]
```

O método filter() é utilizado para selecionar elementos que atendem a uma determinada condição.

##Exemplo
```js
// Lista de números
const numeros = [1, 2, 3, 4, 5];

// O filter percorre a lista e pega somente os números pares
const pares = numeros.filter(numero => numero % 2 === 0);

// Mostra a nova lista com os números pares
console.log(pares);
//Resultado: [2, 4]
```

O método reduce() é utilizado para reduzir todos os elementos de uma lista a um único resultado.

##Exemplo 

```js
// Lista de números
const numeros = [1, 2, 3, 4, 5];

// O reduce percorre a lista e soma todos os números
// O 0 é o valor inicial da soma
const soma = numeros.reduce((total, numero) => total + numero, 0);

// Mostra o resultado da soma
console.log(soma);
//Resultado: 15
```

Diferença entre map(), filter() e reduce()
map()	transforma os elementos e cria uma nova lista
filter()	Seleciona elementos de acordo com uma condição
reduce()	Junta os elementos para gerar um único resultado


Agora um exemplo prático que podemos ver no dia a dia dessas três funções sendo utilizadas 
é o carrinho de compras de uma loja online como o Mercado Livre 

```js
// Lista de produtos do carrinho
const produtos = [
    { nome: "Mouse", preco: 50, desconto: true },
    { nome: "Teclado", preco: 100, desconto: false },
    { nome: "Fone", preco: 80, desconto: true },
    { nome: "Mousepad", preco: 30, desconto: false }
];

// O filter pega somente os produtos que têm desconto
const produtosComDesconto = produtos.filter(produto => produto.desconto);

// O map aplica 10% de desconto no preço dos produtos
const precosComDesconto = produtosComDesconto.map(produto => produto.preco * 0.9);

// O reduce soma os preços para calcular o valor final
const valorFinal = precosComDesconto.reduce((total, preco) => total + preco, 0);

// Mostra o valor final no console
console.log("Valor final: R$ " + valorFinal);
```

No código o que aconteceu foi 
primeiro, o filter() pega somente os produtos que possuem desconto:

Mouse → R$ 50
Fone → R$ 80

Depois, o map() aplica 10% de desconto:

Mouse → R$ 45
Fone → R$ 72

Por último, o reduce() soma os valores:

45 + 72 = R$ 117

Resultado final que aparece é: "Valor final: R$ 117"
