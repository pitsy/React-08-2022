import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Meist from './pages/Meist';
import Kontakt from './pages/Kontakt';
import Seaded from './pages/Seaded';

function App() {
  return (
    <div className='App'>
      <body>
        {/* <button className='button1'>VAJUTA!</button>
        <p className='t1'>norwegian wood</p>
        <img className='img1' src="https://www.sciencefriday.com/wp-content/uploads/2021/12/Forest-trees.jpg" alt="" /> */}

        <h1>aaaaaaaa</h1>
        
        <Link to='/'>
          <button>Avaleht</button>
        </Link>
        <Link to='/meist'>
          <button>Meist</button>
        </Link>
        <Link to='/kontakt'>
          <button>Kontakt</button>
        </Link>
        <Link to='/seaded'>
          <button>Seaded</button>
        </Link>
        
        <Routes>
          <Route path='' element={ <Avaleht /> } />
          <Route path='meist' element={ <Meist /> } />
          <Route path='kontakt' element={ <Kontakt /> } />
          <Route path='seaded' element={ <Seaded /> } />
        </Routes>      
      </body>
    </div>
  );
}

export default App;
