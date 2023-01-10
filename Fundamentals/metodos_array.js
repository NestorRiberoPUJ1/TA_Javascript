

let primos = [2, 5, 7, 11, 13, 17, 19, 23, 29, 31]

primos.forEach((value) => {
    console.log(value);
})

let mapped = primos.map((value) => {
    return `<h1>${value}</h1>`
})
console.log(mapped);

let filtered = primos.filter((value, index, array) => value > 13);
console.log(filtered);
let sin11 = primos.filter((value, index, array) => index !== 3)
console.log(sin11);

let nombres = ["Kevin", "Max", "Sergio", "Carlos", "Lando", "Alex"];
let fil = nombres.filter((value) => {
    return value.toLowerCase().includes("a");
})
console.log(fil);