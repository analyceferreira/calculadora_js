function soma(arrayNumeros) {
    let resultado = 0
    for (i=0; i < arrayNumeros.length; i++){
        resultado = resultado + arrayNumeros[i]
    }
    return resultado
}

function subtracao(arrayNumeros) {
    let resultado = arrayNumeros[0]
    for (i=1; i < arrayNumeros.length; i++){
        resultado = resultado - arrayNumeros[i]
    }
    return resultado
}

function multiplicacao(arrayNumeros) {
    let resultado = arrayNumeros[0]
    for (i=1; i < arrayNumeros.length; i++){
        resultado = resultado * arrayNumeros[i]
    }
    return resultado
}

function divicao(arrayNumeros) {
    let resultado = arrayNumeros[0]
    for (i=1; i < arrayNumeros.length; i++){
        resultado = resultado / arrayNumeros[i]
    }
    return resultado
}
