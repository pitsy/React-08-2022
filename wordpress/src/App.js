import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cart from './pages/Cart';


function App() {

  return (
    <div>

      <Link to='/'>
        <button>Avaleht</button>
      </Link>
      <Link to='/cart'>
        <button>Ostukorv</button>
      </Link>

      <Routes>
        <Route path='' element={ <Homepage /> } />
        <Route path='cart' element={ <Cart /> } />
      </Routes>
    </div> );
}

export default App;
