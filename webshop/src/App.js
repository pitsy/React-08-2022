import './App.css';
import {Routes, Route} from 'react-router-dom';
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
import IndividualProduct from './pages/IndividualProduct';
import NavigationBar from './components/NavigationBar';
import Testing from './pages/Testing';
import { useTranslation } from 'react-i18next';

function App() {

  const { t } = useTranslation();

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='' element={ <Homepage /> } />
        <Route path={t('url.admin')} element={ <AdminHome /> } />
        <Route path={t('url.about')} element={ <AboutUs /> } />
        <Route path={t('url.shops')} element={ <Shops /> } />
        <Route path={t('url.cart')} element={ <Cart /> } />
        <Route path='admin/lisa-toode' element={ <AddProduct /> } />  
        <Route path='admin/muuda-toode/:id' element={ <EditProduct /> } />
        <Route path='admin/halda-tooteid' element={ <MaintainProducts /> } />
        <Route path='admin/halda-poode' element={ <MaintainShops /> } />
        <Route path='admin/halda-kategooriaid' element={ <MaintainCategories /> } />
        <Route path='product/:name' element={ <IndividualProduct />} />
        <Route path='testing' element={ <Testing />} />
      </Routes>
    </div>
  );
}

export default App;
