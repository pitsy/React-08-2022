import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';

function App() {
  return (
    <div>
      <Link to='/'>
        <button>Avaleht</button>
      </Link>
      <Link to='/uudised'>
        <button>Uudised</button>
      </Link>
      <Link to='/kontakt'>
        <button>Vota meiega uhendust</button>
      </Link>
      <Link to='/meist'>
        <button>Info meist</button>
      </Link>
      <br /><br />

      <Routes>
        <Route path='' element={ <Avaleht />} />
        <Route path='uudised' element={ <Uudised /> } />
        <Route path='kontakt' element={ <Kontakt />} />
        <Route path='meist' element={ <Meist /> } />
      </Routes>
    </div>
  );
}

export default App;
