const escola = "Cod3r"

// CharAt - Pega um caractére indicado
console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))

// Index - Pega o caractére da posição
console.log(escola.indexOf('3'))  

// Substring
console.log(escola.substring(1))
console.log(escola.substring(0,3))

// Concatenação
console.log('Escola'.concat(escola.concat("!"))) 
console.log('Escola' + escola + "!")

// Replace
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) // REGEX 
console.log(escola.replace(/\w/g, 'e')) // REGEX

// Conversão de String em Array
console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/)) // REGEX
console.log('Ana,Maria,Pedro'.split(/./)) // REGEX

