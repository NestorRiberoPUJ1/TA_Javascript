import { useState } from 'react';
import './App.css';
import FirstClassComponent from './components/FirstClassComponent/FirstClassComponent';
import FormularioEstudiantes from './components/FormularioEstudiantes/FormularioEstudiantes';
import FunctionComponent from './components/FunctionComponent/FunctionComponent';
import ListaEstudiantes from './components/ListaEstudiantes/ListaEstudiantes';
import MovieContainer from './components/MovieContainer/MovieContainer';
import Peliculas from './components/Peliculas/Peliculas';
import SecondClassComponent from './components/SecondClassComponent/SecondClassComponent';
import StateClassComponent from './components/StateClassComponent/StateClassComponent';
import ThirdClassComponent from './components/ThirdClassComponent/ThirdClassComponent';

function App() {

  const [favorita, setFavorita] = useState("Joker");

  return (
    <div className="App">
      <button className="Botoncito">Enviar</button>
      <FirstClassComponent />
      <ThirdClassComponent>
        <SecondClassComponent title={"El principe"} author={"Maquiavelo"} url={"https://images.cdn2.buscalibre.com/fit-in/360x360/41/68/416823eb59a8da52ee79fe51fb919482.jpg"} />
        <SecondClassComponent title={"Mi historia"} author={"Michelle Obama"} url={"https://m.media-amazon.com/images/I/410wEnVBiKL.jpg"} />
      </ThirdClassComponent>
      <StateClassComponent />
      <hr></hr>
      <FunctionComponent />
      <hr></hr>
      <h1>Pelicula favorita: {favorita}</h1>
      <MovieContainer>
        <Peliculas titulo="Shrek" favorita={favorita} setFavorita={setFavorita} url={"https://play-lh.googleusercontent.com/CZ5cPYN4XZtevhmkHkk5NJYdzZWRvDx6RMJ_j6_yv2uDuVk3z_AnXEmwu3t78il5QoOQ"} />
        <Peliculas titulo={"The batman"} favorita={favorita} setFavorita={setFavorita} url="https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg" />
        <Peliculas titulo={"El club de la pelea"} favorita={favorita} setFavorita={setFavorita} url="https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/field/image/club-pelea-brad-pitt-edward-norton.jpg" />
        <Peliculas titulo={"Joker"} favorita={favorita} setFavorita={setFavorita} url="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/joker-joaquin-phoenix-heroe-villano-1567430480.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=480:*" />
      </MovieContainer>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <ListaEstudiantes />
    </div>
  );
}

export default App;
