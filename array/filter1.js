const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad', preco: 4188, fragil: true},
    { nome: 'Copo de vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de plástico', preco: 18.99, fragil: true}
]

// Minha Resolução
const frageis = e => e.fragil == true
const preco = e => e.preco > 500


resultado = produtos.filter(frageis).filter(preco)
console.log(resultado)

// Resolução do professor

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))