import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function AdminHome() {
    return ( 
        <div>
            <Link to='/admin/lisa-toode'>
                <Button variant='dark'>Lisa uus toode</Button>
            </Link>
            {/* <Link to='/admin/muuda-toode'>
                <Button variant='dark'>Muuda toodet</Button>
            </Link> */}
            <Link to='/admin/halda-tooteid'>
                <Button variant='dark'>Halda tooteid</Button>
            </Link>
            <Link to='/admin/halda-poode'>
                <Button variant='dark'>Halda poode</Button>
            </Link>
            <Link to='/admin/halda-kategooriaid'>
                <Button variant='dark'>Halda kategooriaid</Button>
            </Link>
            <Link to='/admin/halda-pilte'>
                <Button variant='dark'>Halda pilte</Button>
            </Link>

            {/* <Routes>
                <Route path='admin/lisa-toode' element={ <AddProduct /> } />
                <Route path='admin/muuda-toode' element={ <EditProduct /> } />
                <Route path='admin/halda-toodeid' element={ <MaintainProducts /> } />
                <Route path='admin/halda-poode' element={ <MaintainShops /> } />
                <Route path='admin/halda-kategooriaid' element={ <MaintainCategories /> } />
            </Routes> */}
        </div> );
}

export default AdminHome;