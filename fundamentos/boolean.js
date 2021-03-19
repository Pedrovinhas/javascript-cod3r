let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

// Verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!'')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Falsos
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// Com Operadores Lógicos
console.log(!!('' || null || 0 || ' '))


let nome = ''
console.log(nome || 'Desconhecido')
