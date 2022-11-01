import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import {Link, useNavigate} from 'react-router-dom';
import CartSumContext from '../store/CartSumContext';
import AuthContext from '../store/AuthContext';

function NavigationBar() {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const cartSumCtx = useContext(CartSumContext);
    const authCtx = useContext(AuthContext);

    function updateLanguage(languageClicked) {
      i18n.changeLanguage(languageClicked);
      localStorage.setItem('language', languageClicked);
      navigate('/');
    }

    return ( 
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand as={Link} to='/'>Webshop</Navbar.Brand>
                <Nav className="me-auto">
                    { authCtx.isLoggedIn && <Nav.Link as={Link} to={'/' + t('url.admin')}>{t('navbar.admin-button')}</Nav.Link>}
                    <Nav.Link as={Link} to={'/' + t('url.about')}>{t('navbar.about-button')}</Nav.Link>
                    <Nav.Link as={Link} to={'/' + t('url.shops')}>{t('navbar.shops-button')}</Nav.Link>
                    <Nav.Link as={Link} to={'/' + t('url.cart')}>{t('navbar.cart-button')}</Nav.Link>
                </Nav>
                </Container>
                { !authCtx.isLoggedIn && 
                    <Link to='login'>
                        <Button className='login-button' variant='light'>{t('navbar.login')}</Button>
                    </Link>                
                }
                { !authCtx.isLoggedIn && 
                    <Link to='signup'>
                        <Button className='login-button' variant='light'>{t('navbar.signin')}</Button>
                    </Link>                
                }
                { authCtx.isLoggedIn && <Button className='login-button' variant='light' onClick={() => authCtx.updateLoggedIn(false)}>Log out</Button>}
                <Nav.Link as={Link} to={'/' + t('url.cart')} className='cart-price'>{t('navbar.cart-button')}: {cartSumCtx.cartSum} $ </Nav.Link>
                <img className='lang' onClick={() => updateLanguage('en')} src={require('../images/uk.png')} alt='' />
                <img className='lang' onClick={() => updateLanguage('ee')} src={require('../images/estonia.png')} alt='' />
                <img className='lang' onClick={() => updateLanguage('ru')} src={require('../images/russia.png')} alt='' />
            </Navbar>
        </div>
     );
}

export default NavigationBar;