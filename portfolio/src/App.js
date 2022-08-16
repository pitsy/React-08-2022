import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import Work from './pages/Work';
import Hobbies from './pages/Hobbies';
import Courses from './pages/Courses';


function App() {



  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/work">
        <button>Work</button>
      </Link>
      <Link to="/hobbies">
        <button>Hobbies</button>
      </Link>
      <Link to="/courses">
        <button>Courses</button>
      </Link>

      <Routes>
        <Route path='' element={ <Main /> } />
        <Route path='work' element={ <Work /> } />
        <Route path='hobbies' element={ <Hobbies /> } />
        <Route path='courses' element={ <Courses /> } />
      </Routes>
    </div>
  );
}

export default App;
