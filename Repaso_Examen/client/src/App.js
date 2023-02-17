import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/Pages/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MainPage />} />
      </Routes>
      {/*
        <Route path="/:id" exact render={(routeProps) => <></>} />*/}
    </BrowserRouter>
  );
}

export default App;
