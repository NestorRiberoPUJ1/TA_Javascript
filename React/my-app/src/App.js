import './App.css';
import FirstClassComponent from './components/FirstClassComponent/FirstClassComponent';
import SecondClassComponent from './components/SecondClassComponent/SecondClassComponent';
import StateClassComponent from './components/StateClassComponent/StateClassComponent';
import ThirdClassComponent from './components/ThirdClassComponent/ThirdClassComponent';

function App() {
  return (
    <div className="App">
      <button className="Botoncito">Enviar</button>
      <FirstClassComponent />
      <ThirdClassComponent>
        <SecondClassComponent title={"El principe"} author={"Maquiavelo"} url={"https://images.cdn2.buscalibre.com/fit-in/360x360/41/68/416823eb59a8da52ee79fe51fb919482.jpg"} />
        <SecondClassComponent title={"Mi historia"} author={"Michelle Obama"} url={"https://m.media-amazon.com/images/I/410wEnVBiKL.jpg"} />
      </ThirdClassComponent>
      <StateClassComponent />
    </div>
  );
}

export default App;
