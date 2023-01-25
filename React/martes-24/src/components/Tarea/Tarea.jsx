


const Tarea = (props) => {

    return (
        <li>{props.status === true ?
            <s>{props.name}</s>
            :
            props.name}
            <input type="checkbox" checked={props.status} onChange={(e) => props.handleStatus(e.target.checked, props.index)} />
            <button onClick={(e) => props.handleDelete(props.index)} >Borrar</button>
        </li>
    )
}

export default Tarea;