function soma(...paramets) {
    return paramets.reduce(function(acumulador, valor){
        return acumulador + valor
    })
}

function subtracao(...paramets) {
    return paramets.reduce(function(acumulador, valor){
        return acumulador - valor
    })
}

function multiplicacao(...paramets) {
    return paramets.reduce(function(acumulador, valor){
        return acumulador * valor
    })
}

function divicao(...paramets) {
    return paramets.reduce(function(acumulador, valor){
        return acumulador / valor
    })
}

