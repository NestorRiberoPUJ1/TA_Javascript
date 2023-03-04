/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react"



const FilaAvion = (props) => {

    const [edicion, setEdicion] = useState(false);

    const [name, setName] = useState(props.item.name);
    const [manufacturer, setManufacturer] = useState(props.item.manufacturer);
    const [model, setModel] = useState(props.item.model);
    const [miles, setMiles] = useState(props.item.miles);
    const [plate, setPlate] = useState(props.item.plate);

    useEffect(() => {
        console.log(props);
    }, [])

    const handleChangeEdit = (e) => {
        setEdicion(e.target.checked);
        if (e.target.checked === false) {
            if (name !== props.item.name || manufacturer !== props.item.manufacturer ||
                model !== props.item.model || miles !== props.item.miles ||
                plate !== props.item.plate) {
                let data = {
                    name,
                    manufacturer,
                    model,
                    miles,
                    plate
                }
                editItem(data)
            }
        }
    }

    const editItem = (data) => {
        console.log(data);
        axios.put(process.env.REACT_APP_BACKEND + "/api/aviones/" + props.item._id, data)
            .then(result => result.data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <tr>
            <td><img src={"http://localhost:8000/files/" + props.item.url} alt="airplane image" height={150} /></td>
            <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} disabled={!edicion} /></td>
            <td><input type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} disabled={!edicion} /></td>
            <td><input type="text" value={model} onChange={(e) => setModel(e.target.value)} disabled={!edicion} /></td>
            <td><input type="text" value={miles} onChange={(e) => setMiles(e.target.value)} disabled={!edicion} /></td>
            <td><input type="text" value={plate} onChange={(e) => setPlate(e.target.value)} disabled={!edicion} /></td>
            <td>
                <input type="checkbox" checked={edicion} onChange={(e) => handleChangeEdit(e)} />
            </td>
        </tr>
    )
}

export default FilaAvion