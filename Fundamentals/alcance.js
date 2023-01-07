var resultado = 0;


function suma10() {
    for (let idx = 1; idx <= 10; idx++) {
        resultado += idx;
        let actual = idx;
    }
    return resultado
}

console.log(suma10());

function resta10() {
    for (let idx = 1; idx <= 10; idx++) {
        resultado -= idx;
        let actual = idx;
    }
    return resultado
}

console.log(resta10());