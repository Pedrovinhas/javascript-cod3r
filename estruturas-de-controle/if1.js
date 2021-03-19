function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)


function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

// Valores falsos
seForVerdadeEufalo()
seForVerdadeEufalo(null)
seForVerdadeEufalo(undefined)
seForVerdadeEufalo(NaN)
seForVerdadeEufalo('')
seForVerdadeEufalo(0)

// Valores verdadeiros
seForVerdadeEufalo(-1)
seForVerdadeEufalo(" ")
seForVerdadeEufalo("?")
seForVerdadeEufalo([])
seForVerdadeEufalo([1,2])
seForVerdadeEufalo({})