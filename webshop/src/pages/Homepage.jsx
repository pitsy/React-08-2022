// import productsFromFile from '../data/products.json';
import { Button, Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import styles from '../css/Homepage.module.css';
import { useTranslation } from 'react-i18next';

function Homepage() {

    const [products, setProducts] = useState([]);
    const [dbProducts, setDbProducts] = useState([]);
    // const [categories, setCategories] = useState([]);

    // js get unique values from array
    const categories = [...new Set(dbProducts.map(element => element.category))];
    const [activeCategory, setActiveCategory] = useState('all');
    const { t, i18n } = useTranslation();

    // "scraping" python

    useEffect(() => {
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data || []);
                setDbProducts(data || []);
            });
    }, []);

                        // {product} --> {product: {id: 11, name: 'hshsh}, quantity: 6}
    function addToCart(productClicked) {
        let cart = sessionStorage.getItem('cart'); // sessionStorage kaob brauseri sulgemisel
        cart = JSON.parse(cart) || [];
        console.log(cart);
        const index = cart.findIndex(element => element.product.id === productClicked.id);
        if (index >= 0) {
            // suurenda kogust
            // otsin jarjekorranumbriga ules ja muudan kogust
            cart[index].quantity = cart[index].quantity + 1;
        } else {
            cart.push({product: productClicked, quantity: 1});
        }
        cart = JSON.stringify(cart);
        sessionStorage.setItem('cart', cart);
        toast.success(productClicked.name + t('toast.cart-added'), {
            theme: 'dark',
            position: 'bottom-right'
        });
    }

    function filterByCategory(categoryClicked) {
        if (categoryClicked === 'all') {
            setProducts(dbProducts);
            setActiveCategory('all');
        } else {
            const result = dbProducts.filter(element => element.category === categoryClicked);
            setProducts(result);
            setActiveCategory(categoryClicked);
        }
    }

    function sortAZ() {
        products.sort((a,b) => a.name.localeCompare(b.name));
        setProducts(products.slice());

    }

    function sortZA() {
        products.sort((a,b) => b.name.localeCompare(a.name));
        setProducts(products.slice());
    }

    function sortPriceAsc() {
        products.sort((a,b) => a.price - b.price);
        setProducts(products.slice());
    }

    function sortPriceDesc() {
        products.sort((a,b) => b.price - a.price);
        setProducts(products.slice());
    }

    // const [sidebarTop, setSidebarTop] = useState(undefined);
 
    // useEffect(() => {
    //     const sidebarEl = document.querySelector('.sidebar').getBoundingClientRect();
    //     setSidebarTop(sidebarEl.top);
    // }, []);
    
    // useEffect(() => {
    //     if (!sidebarTop) return;
        
    //     window.addEventListener('scroll', isSticky);
    //     return () => {
    //         window.removeEventListener('scroll', isSticky);
    //     };
    // }, [sidebarTop]);
    
    // function isSticky(e) {
    //     const scrollTop = window.scrollY;
    //     if (scrollTop >= sidebarTop - 10) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    return ( 
        <div> 
            <ToastContainer />
            <br />

            <div className={styles.menus}>

                <Card border='light'>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <div className={activeCategory ==='all' ? 'active-category' : 'inactive-category'} 
                            onClick={() => filterByCategory('all')}>
                                {t('filter.all-categories')}
                            </div>
                        </ListGroup.Item>
                        {categories.map(element => 
                            <ListGroup.Item key={element} 
                            className={activeCategory === element ? 'active-category' : 'inactive-category'} 
                            onClick={() => filterByCategory(element)}>
                                    {element}
                            </ListGroup.Item>)}
                    </ListGroup>
                </Card>

                <Container>
                    <Button size='sm' variant='secondary' className={styles.sort} onClick={sortAZ}>{t('sort.az')}</Button>
                    <Button size='sm' variant='secondary' className={styles.sort} onClick={sortZA}>{t('sort.za')}</Button>
                    <Button size='sm' variant='secondary' className={styles.sort} onClick={sortPriceAsc}>{t('sort.price-asc')}</Button>
                    <Button size='sm' variant='secondary' className={styles.sort} onClick={sortPriceDesc}>{t('sort.price-desc')}</Button>
                    <div>Tooteid: {products.length} tk</div>
                    <br />
                    {products.length === 0 && <Spinner />}
                    <Row xs={1} md={4} className="g-4">
                        {products.map((element) => 
                            <div key={element.id}>
                                <Col>
                                    <Card className='mb-3' style={{ width: '16rem' }} bg='light' border='dark'>
                                        <Link className={styles.link} to={'/product/' + element.name}>
                                            <Card.Img className={styles.img} src={element.image} alt="" />
                                        </Link>
                                        <Card.Body>
                                            <Link className={styles.link} to={'/product/' + element.name}>
                                                <Card.Title className={styles.title}>{element.name}</Card.Title>
                                            </Link>
                                            <Card.Text>{element.price} $</Card.Text>
                                        </Card.Body>
                                        <Button variant='dark' onClick={() => addToCart(element)}>Lisa ostukorvi</Button>
                                    </Card>
                                </Col>
                        </div>)}    
                    </Row>
                </Container>
            </div>
        </div> );
}

export default Homepage;