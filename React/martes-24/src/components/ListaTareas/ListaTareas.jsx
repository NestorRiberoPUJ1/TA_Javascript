
import { useEffect } from "react";
import { useState } from "react"
import Tarea from "../Tarea/Tarea";
import styles from "./ListaTareas.module.css"

const listaDefault = [
    { name: "Lavar el carro", status: false },
    { name: "Sacar la basura", status: true },
    { name: "Comprar mercado", status: false },
    { name: "Pagar Recibos", status: false },
    { name: "Cobrar cheques", status: true },
    { name: "Descansar domingo", status: false },
]

const ListaTareas = () => {

    const [chores, setChores] = useState([]);
    const [newChore, setNewChore] = useState("");

    const handleNewChore = (e) => {
        e.preventDefault();
        let aux = [...chores];
        aux.push({ name: newChore, status: false })
        setChores([...aux]);
        setNewChore("");
    }

    const handleStatusChange = (value, idx) => {
        let aux = [...chores];
        aux[idx].status = value;
        setChores([...aux]);
    }

    const handleDeleteChore = (idx) => {
        let aux = [...chores];
        let filtered = aux.filter((value, index, array) => index !== idx)
        setChores([...filtered]);
    }

    useEffect(() => {
        console.log("Iniciando Componente...");
        setTimeout(() => {
            setChores(listaDefault);
        }, 5000)
    }, [])

    useEffect(() => {
        console.log("CHORES: ", chores)
    }, [chores])

    return (
        <div>
            <form onSubmit={handleNewChore}>
                <input type="text" value={newChore} onChange={(e) => setNewChore(e.target.value)} />
                <button>Agregar</button>
            </form>

            <ul>
                {chores.map((item, idx, list) => {
                    return (
                        <Tarea
                            key={"tarea" + item + idx} {...item}
                            handleStatus={handleStatusChange}
                            index={idx}
                            handleDelete={handleDeleteChore}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default ListaTareas