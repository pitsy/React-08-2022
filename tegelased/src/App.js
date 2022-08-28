import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import LisaTegelane from './pages/LisaTegelane';

function App() {
  return (
    <div>
      <Link to="/">
        <button>Kuva tegelased</button>
      </Link>
      <Link to="/lisa-tegelasi">
        <button>Lisa tegelasi</button>
      </Link>

      <Routes>
        <Route path='' element={ <Homepage /> } />
        <Route path='lisa-tegelasi' element={ <LisaTegelane /> } />
      </Routes>
    </div>
  );
}

export default App;