const Arreglo = [1, 3, 5, 7, 9];
const Freeze = Object.freeze([2, 4, 6, 8, 10]);

Arreglo.push(11);
console.log(Arreglo);

//Generar error, no se puede modificar 
//Freeze.push(10);
//console.log(Freeze);

const EnterosSpread = [...Arreglo, ...Freeze];
console.log(EnterosSpread);

const EnterosConcat = Freeze.concat(...Arreglo);
console.log(EnterosConcat);

const Muestra = EnterosConcat.slice(2, 5);
console.log(Muestra);


console.log(EnterosConcat.sort((a, b) => a > b ? 1 : -1));
//error
//Freeze.sort();

const articles = [
    { brand: "Iphone", price: 1000 },
    { brand: "Samsung", price: 800 },
    { brand: "CAT", price: 1250 },
    { brand: "Nokia", price: 900 }
]

console.log(articles.sort((a, b) => a.price < b.price ? 1 : -1))


const mappedList = articles.map((item, index, array) => `<li>${index} ${item.brand} : $${item.price}</li>`);
console.log(mappedList);

const filteredList = articles.filter((item, idx, arr) => item.price <= 1000 && item.price >= 850);
console.log(filteredList);