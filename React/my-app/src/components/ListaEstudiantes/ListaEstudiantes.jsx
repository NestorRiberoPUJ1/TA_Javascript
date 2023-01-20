import { Fragment, useState } from "react";
import FormularioEstudiantes from "../FormularioEstudiantes/FormularioEstudiantes";

import styles from "./ListaEstudiantes.module.css"


const ItemEstudiante = (props) => {

    return (
        <li className={styles.Row} >
            <h3>Nombre: {props.nombre} &nbsp; </h3>
            <h3>Edad: {props.edad} &nbsp;</h3>
            <h3>Curso: {props.curso} </h3>
        </li>
    )
}

const ListaEstudiantes = () => {

    const [lista, setLista] = useState([]);

    return (
        <div>
            <h1>Lista de Estudiantes</h1>
            <div className={styles.Row}>
                <div className={styles.Col1}>
                    <FormularioEstudiantes lista={lista} setLista={setLista} />
                </div>
                <div className={styles.Col2}>
                    <ul>
                        {
                            lista.map((item, idx, arr) => {
                                console.log(idx, item, arr);
                                return (
                                    <Fragment key={item + idx}>
                                        <ItemEstudiante {...item} />
                                    </Fragment>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ListaEstudiantes;