// Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
// Destructuring
const { nome, idade } = pessoa
console.log(nome, idade)

// Atribuindo novos nomes aos atributos
const { nome: n, idade: i } = pessoa
console.log(n, i)

// Tirando atributos que não existem por Destructuring
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

// Acessando atributos aninhados por Desctructuring
const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

// Acessando atributos aninhados que não existem
const { conta: { ag, num} } = pessoa
console.log(ag, num)