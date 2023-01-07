//Depuración ver errores o etapas en el proceso mostrar información al usuario

let error = "La página no existe";

let response = [
    {
        nombre: "Pedro",
        apellido: "De la Rosa",
        edad: 52
    },
    {
        nombre: "Kimi",
        apellido: "Raikkonen",
        edad: 53,
        gps: ["Mónaco", "España", "Rusia"]
    }
]

console.log("Suma: ", 1 + 1);
console.warn("Memoria casi llena:", "500mb disponibles");
console.error("Error en solicitud: ", error);

console.log("Respuesta: ", response);

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const idx in numeros /* let idx=0; idx<numeros.length; idx++*/) {
    if (numeros[idx] % 2 === 0) {
        console.log(numeros[idx], "par")
    }
    else {
        console.log(numeros[idx], "impar")
    }
}

numeros.forEach((value) => {
    if (value % 2 === 0) {
        console.log(value, "par")
    }
    else {
        console.log(value, "impar")
    }
})
