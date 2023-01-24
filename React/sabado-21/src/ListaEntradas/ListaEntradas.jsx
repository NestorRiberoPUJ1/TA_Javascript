import { useState } from "react"
import styles from "./ListaEntradas.module.css"

const data = [
    { nombre: "Mick", respuesta: "", checked: false },
    { nombre: "Kevin", respuesta: "", checked: true },
    { nombre: "Max", respuesta: "", checked: true },
    { nombre: "Sergio", respuesta: "", checked: true },
    { nombre: "Carlos", respuesta: "", checked: true },
]

const ListaEntradas = ({ setLeader }) => {

    const [encuesta, setEncuesta] = useState(data);
    const [ranking, setRanking] = useState(null);
    const handleInputChange = (e, idx) => {
        let aux = [...encuesta];
        aux[idx].respuesta = e.target.value;
        console.log(aux);
        setEncuesta([...aux]);
    }
    const handleCheckInput = (e, idx) => {
        let aux = [...encuesta];
        aux[idx].checked = e.target.checked;
        console.log(aux);
        setEncuesta([...aux]);
    }
    return (
        <div>
            {
                encuesta.map((item, index, arr) => {
                    return (
                        <div key={item.nombre + index} className={styles.Pregunta} onDoubleClick={(e) => setLeader(item.nombre)}>
                            <input type="checkbox" checked={item.checked} onChange={(e) => handleCheckInput(e, index)} />
                            <h4>Nombre: {item.nombre}</h4>
                            <input type="text" value={item.respuesta} onChange={(e) => handleInputChange(e, index)} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListaEntradas