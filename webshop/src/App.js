import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Shops from './pages/Shops';
import Cart from './pages/Cart';
import AdminHome from './pages/Admin/AdminHome';
import AddProduct from './pages/Admin/AddProduct';
import EditProduct from './pages/Admin/EditProduct';
import MaintainProducts from './pages/Admin/MaintainProducts';
import MaintainShops from './pages/Admin/MaintainShops';
import MaintainCategories from './pages/Admin/MaintainCategories';
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  function updateLanguage(languageClicked) {
    i18n.changeLanguage(languageClicked);
    localStorage.setItem('language', languageClicked);
  }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to='/'>Webshop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/admin'>{t('navbar.admin-button')}</Nav.Link>
            <Nav.Link as={Link} to='/meist'>{t('navbar.about-button')}</Nav.Link>
            <Nav.Link as={Link} to='/poed'>{t('navbar.shops-button')}</Nav.Link>
            <Nav.Link as={Link} to='/ostukorv'>{t('navbar.cart-button')}</Nav.Link>
          </Nav>
        </Container>
        <button onClick={() => updateLanguage('en')}>EN</button>
        <button onClick={() => updateLanguage('ee')}>EE</button>
        <button onClick={() => updateLanguage('ru')}>RU</button>
      </Navbar>

      <Routes>
        <Route path='' element={ <Homepage /> } />
        <Route path='admin' element={ <AdminHome /> } />
        <Route path='meist' element={ <AboutUs /> } />
        <Route path='poed' element={ <Shops /> } />
        <Route path='ostukorv' element={ <Cart /> } />
        <Route path='admin/lisa-toode' element={ <AddProduct /> } />
        <Route path='admin/muuda-toode' element={ <EditProduct /> } />
        <Route path='admin/halda-toodeid' element={ <MaintainProducts /> } />
        <Route path='admin/halda-poode' element={ <MaintainShops /> } />
        <Route path='admin/halda-kategooriaid' element={ <MaintainCategories /> } />
      </Routes>
    </div>
  );
}

export default App;
