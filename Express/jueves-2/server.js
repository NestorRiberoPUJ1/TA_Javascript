const express = require("express"); // importación del paquete express
const app = express();  //Creando instancia llamada app
const port = 8000;      //asignación del puerto del servidor

let animals = [
    "Perro",
    "Gato",
    "Alpaca",
    "Chinchilla",
    "Lemur",
    "Zorrito",
    "Coati",
]

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




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
})

app.get("/animals/:id", (req, res) => {
    const id = req.params.id;
    if (id < 0) {
        res.status(404)
        res.json({ message: "Incorrect index" })
    }
    else if (id >= animals.length) {
        res.status(404)
        res.json({ message: "Index out of range" })
    }
    res.json(animals[id])
})

app.listen(port, () => console.log(`Listening on port: ${port}`));
