
//obj o diccionario
var mascota = {
    nombre: "Gandolfo",
    animal: "Alpaca",
    comida: "Naranjas",
    gustos: ["caminar", "saltar", "rumear"]
}

//lista o array
var camelidos = ["Camello", "Llama", "Alpaca", "Vicuña"];

let name = mascota.nombre;
let animalito = mascota.animal;
let food = mascota.comida;
console.log("Caso Regular: ", name);

let camelido1 = camelidos[0];
let camelido2 = camelidos[1];
let camelido3 = camelidos[2];
let camelido4 = camelidos[3];
console.log("Caso Regular: ", camelido1);

//directa
let { animal } = mascota;
console.log("Directa Dict: ", animal);
let [firstAnimal, secondAnimal, thirdAnimal, fourthAnimal] = camelidos;
console.log("Directa List: ", fourthAnimal);

//dirigida
let { nombre: alpaquita } = mascota;
console.log("Dirigida Dict: ", alpaquita);

//anidada
let { gustos: [, , gusto3] } = mascota;
console.log("Anidada: ", gusto3);

