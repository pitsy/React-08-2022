import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Aveleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import Meist from './pages/Meist';
import Poed from './pages/Poed';
import Koduleht from './pages/Koduleht';
import Pildid from './pages/Pildid';

function App() {
  return (
    <div className="App">
      <img className="pilt" src="https://dreamsanswers.com/wp-content/uploads/2022/02/Dream_about_A_Tree.jpg" alt="" />
      <button className="nupp">Nupp</button>

      <Link to="/">
        <button>Koduleht</button>
      </Link>
      <Link to="/ostukorv">
        <button>Ostukorvi</button>
      </Link>
      <Link to="/lisa-toode">
        <button>Lisa toode</button>
      </Link>
      <Link to="/seaded">
        <button>Lehe seaded</button>
      </Link>
      <Link to="/meist">
        <button>Info meist</button>
      </Link>
      <Link to="/pildid">
        <button>Pildid</button>
      </Link>
      <Link to="/poed">
        <button>Poed</button>
      </Link>
      <Link to="/avaleht">
        <button>Avaleht</button>
      </Link>

      <Routes>
        <Route path='' element={ <Koduleht />} />
        <Route path='avaleht' element={ <Aveleht />} />
        <Route path='ostukorv' element={ <Ostukorv />} />
        <Route path='lisa-toode' element={ <LisaToode />} />
        <Route path='seaded' element={ <Seaded />} />
        <Route path='meist' element={ <Meist />} />
        <Route path='poed' element={ <Poed />} />
        <Route path='pildid' element={ <Pildid />} />
      </Routes>
    </div>
  );
}

export default App;
