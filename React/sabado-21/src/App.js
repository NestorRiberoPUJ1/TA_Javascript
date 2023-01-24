import logo from './logo.svg';
import './App.css';
import ListaEntradas from './ListaEntradas/ListaEntradas';
import Ranking from './Ranking/Ranking';
import { useState } from 'react';

function App() {

  const [leader, setLeader] = useState("");

  return (
    <div className="App">
      <Ranking leader={leader} />
      <ListaEntradas setLeader={setLeader} />
    </div>
  );
}

export default App;
