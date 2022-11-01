import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function AdminHome() {
    return ( 
        <div>
            <Link to='/admin/lisa-toode'>
                <Button className='admin-button' variant='outline-dark'>Add a new product</Button>
            </Link>
            {/* <Link to='/admin/muuda-toode'>
                <Button variant='dark'>Muuda toodet</Button>
            </Link> */}
            <Link to='/admin/halda-tooteid'>
                <Button className='admin-button' variant='outline-dark'>Maintain products</Button>
            </Link>
            <Link to='/admin/halda-poode'>
                <Button className='admin-button' variant='outline-dark'>Maintain stores</Button>
            </Link>
            <Link to='/admin/halda-kategooriaid'>
                <Button className='admin-button' variant='outline-dark'>Maintain categories</Button>
            </Link>
            <Link to='/admin/halda-pilte'>
                <Button className='admin-button' variant='outline-dark'>Maintain pictures</Button>
            </Link>
            <br />
            <br />
            <p>This is a demo of the admin features so the database cannot be edited</p>

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