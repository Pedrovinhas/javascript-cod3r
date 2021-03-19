const nome = 'Rebeca'

// Concatenação padrão
const concatenacao = 'Olá' + nome + '!'

// Interpolação - Template String
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// Expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)