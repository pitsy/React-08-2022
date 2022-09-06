import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';

function NavigationBar() {

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
                <img className='lang' onClick={() => updateLanguage('en')} src={require('../images/uk.png')} alt='' />
                <img className='lang' onClick={() => updateLanguage('ee')} src={require('../images/estonia.png')} alt='' />
                <img className='lang' onClick={() => updateLanguage('ru')} src={require('../images/russia.png')} alt='' />
            </Navbar>
        </div>
     );
}

export default NavigationBar;