import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Exercise_12 from './pages/exercise_12';

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

      <Routes>
        <Route path='/' exact element={<div>Tere</div>} />
        <Route path='/tagasisided' exact element={ <Tagasiside />} />
        <Route path='/andjad' exact element={ <TagasisideAndjad />} />
        <Route path='/e_12' exact element={ <Exercise_12 />} />
      </Routes>
    </div>
  );
}

export default App;
