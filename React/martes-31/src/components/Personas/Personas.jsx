import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



const Personas = () => {
    const params = useParams();
    const { id } = useParams();
    const [persona, setPersona] = useState({})
    useEffect(() => {
        console.log(params);
        console.log("ID:", id)
        axios.get("https://swapi.dev/api/people/" + params.id)
            .then(response => response.data)
            .then(result => {
                console.log({ ...result });
                let endpoints = result.films;

                let requests = [
                    axios.get("https://swapi.dev/api/people/1"),
                    axios.get("https://swapi.dev/api/people/2"),
                    axios.get("https://swapi.dev/api/people/3"),
                    axios.get("https://swapi.dev/api/people/8"),
                ]
                axios.all(requests)
                    .then(respo => {
                        console.log(respo);
                        //Garantiza que se ejecutaron todas y que todas llegaron bien
                    })
                    .catch(error => console.log(error))

                axios.all(endpoints.map((promise) => axios.get(promise)))
                    .then(rst => {
                        let films = rst.map((item) => item.data)
                        result.films = films;
                        setPersona(result);
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <h1>Ruta personas {params.id}</h1>
            <h2>Nombre: {persona.name}</h2>
            <h2>Height: {persona.height}</h2>
            <h2>Películas:</h2>
            <ul>
                {
                    persona.films?.map((item, index, array) => {
                        //console.log(item);
                        return (
                            <li key={"film" + index}>
                                <a href={item.url} >{item.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Personas