const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

// Tamanho do Array
valores[4] = 10
console.log(valores)
console.log(valores.length)

// Adiciona elementos
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// Tirar elementos
console.log(valores.pop())
delete valores[0]
console.log(valores)

// Array é um objeto
console.log(typeof valores)