
const express = require('express');
const cors = require("cors");
const cookieParser = require('cookie-parser');

const app = express();

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000"
    })
)


//DB init

require("./config/mongoose.config");



//Para usar json y obtener URL data

app.use(express.json(), express.urlencoded({ extended: true }));

//Cookies
app.use(cookieParser());

//Routes

const myRoutes = require("./routes/user.routes");

myRoutes(app);

app.listen(8000, () => console.log("SERVER LOADED"));