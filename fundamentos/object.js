// Criação do objeto Vazio
const prod1 = {} 

// Adicionando atributos no objeto dinamicamente.
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90

// Objeto identificador espaçado
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

// Declaração do objeto - Boa prática
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90

}

// JSON
'{ "nome": "Camisa Polo", "preco": 79.90 }'

