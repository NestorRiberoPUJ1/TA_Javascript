import { useState } from "react"

import styles from "./FormularioEstudiantes.module.css"

const FormularioEstudiantes = ({ lista, setLista }) => {

    const [nombre, setNombre] = useState("");
    const [nombreError, setNombreError] = useState("");
    const [edad, setEdad] = useState("");
    const [curso, setCurso] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            nombre: nombre,
            edad: edad,
            curso: curso
        }

        let aux = [...lista]
        aux.push(data);
        console.log(aux);
        setLista([...aux]);

        setNombre("");
        setEdad("");
        setCurso("");

    }

    const handleNewName = (value) => {
        if (value.length === 0) {
            setNombreError("El nombre es requerido");
        }
        else if (value.length < 2) {
            setNombreError("Nombre muy corto");
        }
        else {
            setNombreError("Correcto");
        }

        setNombre(value);

    }

    return (
        <form className={styles.Formulario} onSubmit={handleSubmit}>
            <div className={styles.Entrada}>
                <label>Nombre</label>
                <input type="text" value={nombre} onChange={(e) => handleNewName(e.target.value)} />
            </div>
            <p>{nombreError}</p>
            <div className={styles.Entrada}>
                <label>Edad</label>
                <input type="number" min={0} value={edad} onChange={(e) => setEdad(e.target.value)} />
            </div>
            {
                edad > 18 ?
                    <p>Edad muy alta</p>
                    :
                    null
            }
            <div className={styles.Entrada}>
                <label>Curso</label>
                <input type="number" min={1} max={11} value={curso} onChange={(e) => setCurso(e.target.value)} />
            </div>
            <button type="submit" >Crear</button>
        </form>
    )
}

export default FormularioEstudiantes