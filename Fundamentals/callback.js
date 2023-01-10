

const regular = () => {
    console.log("Funcion Regular");
}
const callback = () => {
    console.log("Callback")
}
regular();

setTimeout(callback, 5000);

//setInterval(callback, 2000);

regular();

const saqueAbierto = () => {
    return "Saque Abierto"
}

const saqueYvolea = () => {
    return "Saque y volea"
}

const jugarTenis = (servicio) => {
    console.log("Listo para servir");
    console.log("Servicio a utilizar");
    let service = servicio();
    console.log(service);
}

jugarTenis(saqueYvolea);
jugarTenis(saqueAbierto);