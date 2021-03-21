// Factory Simples
function criarPessoa() {
    return {
          nome: 'Ana',
          sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

// FActory com parametros
function criarProdutos(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProdutos(pepeu, 42))