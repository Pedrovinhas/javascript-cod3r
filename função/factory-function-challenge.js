function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('livro', 50.49))
console.log(criarProduto('Macbook', 4490.40))