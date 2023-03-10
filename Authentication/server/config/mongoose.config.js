

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/authenticationDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("CONNECTED TO DB"))
    .catch(err => console.log("ERROR WITH DB: " + err))