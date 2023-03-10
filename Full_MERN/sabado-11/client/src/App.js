import { Fragment, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import FilaAvion from './components/FilaAvion/FilaAvion';

const App = () => {


  const [image, setImage] = useState({ preview: '', data: '' })
  const [nombre, setNombre] = useState("");
  const [modelo, setModelo] = useState("");
  const [millas, setMillas] = useState("");
  const [fabricante, setFabricante] = useState("");
  const [placa, setPlaca] = useState("");

  const [errors, setErrors] = useState({});

  const [aviones, setAviones] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.stringify(
      {
        name: nombre,
        model: modelo,
        miles: millas,
        manufacturer: fabricante,
        plate: placa,
      }
    );

    let formData = new FormData();

    formData.append('file', image.data);
    formData.append('data', data)



    console.log(data);
    axios.post(process.env.REACT_APP_BACKEND + "/api/aviones", formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(response => response.data)
      .then(result => {
        console.log(result);
        setErrors({});
        setNombre("");
        setModelo("");
        setMillas("");
        setFabricante("");
        setPlaca("");
        getPlanes();

      })
      .catch(error => {
        console.log(error.response.data.errors);
        if (error.response.data.errors != undefined) {
          setErrors(error.response.data.errors);
        }
      })
  }

  const getPlanes = () => {
    axios.get(process.env.REACT_APP_BACKEND + "/api/aviones")
      .then(result => result.data)
      .then(response => {
        console.log(response);
        setAviones(response);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getPlanes();
  }, [])

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0]
    }
    setImage(img);
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit} >
        <div>
          <label>Imagen:</label>
          <input type="file" name="file" onChange={handleFileChange} accept='image/jpg, image/jpeg' />
        </div>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        {errors.name ? <p style={{ color: "red", fontSize: 10 }}>{errors.name.message}</p> : null}
        <div>
          <label>Modelo:</label>
          <input type="number" value={modelo} onChange={(e) => setModelo(e.target.value)} />
        </div>
        {errors.model ? <p style={{ color: "red", fontSize: 10 }}>{errors.model.message}</p> : null}
        <div>
          <label>Millas:</label>
          <input type="number" value={millas} onChange={(e) => setMillas(e.target.value)} />
        </div>
        {errors.miles ? <p style={{ color: "red", fontSize: 10 }}>{errors.miles.message}</p> : null}
        <div>
          <label>Fabricante:</label>
          <input type="text" value={fabricante} onChange={(e) => setFabricante(e.target.value)} />
        </div>
        {errors.manufacturer ? <p style={{ color: "red", fontSize: 10 }}>{errors.manufacturer.message}</p> : null}
        <div>
          <label>Placa:</label>
          <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} />
        </div>
        {errors.plate ? <p style={{ color: "red", fontSize: 10 }}>{errors.plate.message}</p> : null}
        <button type='submit' >Enviar</button>
      </form>
      <hr></hr>
      <div>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Nombre</th>
              <th>Fabricante</th>
              <th>Modelo</th>
              <th>Millas</th>
              <th>Placa</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {aviones.map((item, index, array) => {
              return (
                <Fragment key={"Avion" + index}>
                  <FilaAvion item={item} />
                </Fragment>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
