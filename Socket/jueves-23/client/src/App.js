import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import ColorList from "./components/ColorList/ColorList";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ColorList />} />
          <Route path="/chat" exact element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
