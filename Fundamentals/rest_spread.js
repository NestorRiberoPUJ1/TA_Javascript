//obj o diccionario
var mascota = {
    nombre: "Gandolfo",
    animal: "Alpaca",
    comida: "Naranjas",
    gustos: ["caminar", "saltar", "rumear"]
}

//lista o array
var camelidos = ["Camello", "Llama", "Alpaca", "Vicuña"];


let [animal1, animal2, ...animalesVarios] = camelidos;
console.log("Des simple: ", animal2);
console.log("Residuo: ", animalesVarios);

let { nombre, ...cosasVarias } = mascota;
console.log("Des simple: ", nombre);
console.log("Residuo: ", cosasVarias);


// copias

let mascota2 = mascota;
console.log("Mascota 2", mascota2);
mascota.comida = "Helado";
console.log("Mascota 2", mascota2);
mascota2 = { ...mascota };
mascota.comida = "Apio";
console.log("Mascota", mascota);
console.log("Mascota 2", mascota2);