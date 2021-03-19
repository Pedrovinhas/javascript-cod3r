function gerarNumeroAleatorio(min, max) {
    const numero = Math.random() * (max - min) + min
    return Math.floor(numero)
}

let opcao = -1

do {
    opcao = gerarNumeroAleatorio(-1, 10)
    console.log(`O número foi ${opcao}`)
} while (opcao != -1)

console.log('Até a próxima')