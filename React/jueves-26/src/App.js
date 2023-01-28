import { useState, useEffect } from "react"
import './App.css';
import axios from "axios"

const App = () => {

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/1/")
      .then(response => {
        console.log(response);

        for (let x = 0; x < 10000; x++) {

        }
        return response.data
      })
      .then(result => {
        setPokemon(result);
      })
      .catch(error => {
        console.error(error);
        setPokemon({ name: "NO existe" })
      })

    console.log("ESPERANDO");

    var config = {
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });


  }, [])


  return (

    <div className="App">

      <h1>Pokemon: {pokemon.name}</h1>
      <h5>Types:</h5>
      <ul>
        {pokemon.types?.map((item, index, array) => {
          return (
            <li key={"type" + index}>
              {item.type.name}
            </li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;
