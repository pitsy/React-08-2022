import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Exercise_12 from './pages/exercise_12';
import Tegevused from './pages/Tegevused';
import Exercise_17 from './pages/Exercise_17';

function App() {
  return (
    <div>
      <Link to='/'>
        <button>Avalehele</button>
      </Link>
      <Link to='/tagasisided'>
        <button>Tagasisidede lehele</button>
      </Link>
      <Link to='/andjad'>
        <button>Vaata, kes tagasisidet on andnud</button>
      </Link>
      <Link to='/e_12'>
        <button>E12</button>
      </Link>
      <Link to='/e_17'>
        <button>E17</button>
      </Link>
      <Link to='/tegevused'>
        <button>Tegevused</button>
      </Link>

      <Routes>
        <Route path='/' exact element={<div>Tere</div>} />
        <Route path='/tagasisided' exact element={ <Tagasiside />} />
        <Route path='/andjad' exact element={ <TagasisideAndjad />} />
        <Route path='/e_12' exact element={ <Exercise_12 />} />
        <Route path='/tegevused' exact element={ <Tegevused />} />
        <Route path='/e_17' exact element={ <Exercise_17 />} />
      </Routes>
    </div>
  );
}

export default App;
