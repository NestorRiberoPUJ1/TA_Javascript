
import { useState } from "react"
import Tarea from "../Tarea/Tarea";
import styles from "./ListaTareas.module.css"



const ListaTareas = () => {

    const [chores, setChores] = useState([]);
    const [newChore, setNewChore] = useState("");

    const handleNewChore = (e) => {
        e.preventDefault();
        let aux = [...chores];
        aux.push({ name: newChore, status: false })
        setChores([...aux]);
        console.log("Chores: ", aux);
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