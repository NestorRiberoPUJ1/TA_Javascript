const express = require("express"); // importación del paquete express
const app = express();  //Creando instancia llamada app
const port = 8000;      //asignación del puerto del servidor

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let animals = [
    "Perro",
    "Gato",
    "Alpaca",
    "Chinchilla",
    "Lemur",
    "Zorrito",
    "Coati",
]

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.post("/api", (req, res) => {
    console.log(req.body);
    res.json({ message: "POST Succesfull" });
});

app.get("/api/spanish", (req, res) => {
    res.json({ message: "Hola Mundo" });
});


app.get("/animals", (req, res) => {
    res.json(animals)
});

app.post("/animals", (req, res) => {
    const data = req.body;
    animals.push(data.name);
    res.json(animals);
})

app.get("/animals/:idx", (req, res) => {
    const idx = parseInt(req.params.idx);
    if (idx < 0) {
        res.status(404)
        res.json({ message: "Incorrect index" })
    }
    else if (idx >= animals.length) {
        res.status(404)
        res.json({ message: "Index out of range" })
    }
    res.json(animals[idx])
})


app.delete("/animals/:idx", (req, res) => {
    const idx = parseInt(req.params.idx); // cast to Int para comparar con index en filter
    if (idx < 0) {
        res.status(404)
        res.json({ message: "Incorrect index" })
    }
    else if (idx >= animals.length) {
        res.status(404)
        res.json({ message: "Index out of range" })
    }
    //console.log(typeof idx)

    let filtered = animals.filter((item, index, array) => index !== idx);
    animals = filtered;

    res.json(animals);
})


app.put("/animals/:idx", (req, res) => {

    const idx = parseInt(req.params.idx); // cast to Int para comparar con index en filter
    const data = req.body;
    if (idx < 0) {
        res.status(404)
        res.json({ message: "Incorrect index" })
    }
    else if (idx >= animals.length) {
        res.status(404)
        res.json({ message: "Index out of range" })
    }

    animals[idx] = data.name;

    res.json(animals);

})

app.listen(port, () => console.log(`Listening on port: ${port}`));
