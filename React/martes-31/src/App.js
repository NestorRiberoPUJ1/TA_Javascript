import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Principal from './components/Principal/Principal';
import Personas from './components/Personas/Personas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Principal />} />
          <Route path="/:id" exact element={<Personas/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
