// import productsFromFile from '../data/products.json';
import { Button, Card, Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import CarouselGallery from '../components/CarouselGallery';
import SortButtons from '../components/SortButtons';
import PageButtons from '../components/PageButtons';
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import styles from '../css/Homepage.module.css';
import { useTranslation } from 'react-i18next';

function Homepage() {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [dbProducts, setDbProducts] = useState([]);
    // js get unique values from array
    const categories = [...new Set(dbProducts.map(element => element.category))];
    const [activeCategory, setActiveCategory] = useState('all');
    const { t } = useTranslation();

    const [activePage, setActivePage] = useState(1);

    // "scraping" python

    useEffect(() => {
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(0,20) || []);
                setFilteredProducts(data || []);
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
            setProducts(dbProducts.slice(0,20));
            setFilteredProducts(dbProducts);
            setActiveCategory('all');
        } else {
            const result = dbProducts.filter(element => element.category === categoryClicked);
            setProducts(result.slice(0,20));
            setFilteredProducts(result);
            setActiveCategory(categoryClicked);
        }
        setActivePage(1);
    }

    function changePage(newPage) {
        setActivePage(newPage);
        // 1  1-20   .slice(0,20)
        // 2  21-40  .slice(20,40)
        setProducts(filteredProducts.slice(20*newPage-20,20*newPage));
    }

    return ( 
        <div>      
            <ToastContainer />
            <br />
            <CarouselGallery />
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

                    <SortButtons 
                        fProducts={filteredProducts}
                        setFProducts={setFilteredProducts}
                        cPage={changePage}
                        actPage={activePage}
                    />
                    <div>Tooteid: {filteredProducts.length} tk</div>
                    <br />

                    <PageButtons 
                        fProducts={filteredProducts}
                        cPage={changePage}
                        actPage={activePage}
                    />

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

                    <PageButtons 
                        fProducts={filteredProducts}
                        cPage={changePage}
                        actPage={activePage}
                    />
                </Container>
            </div>
        </div> );
}

export default Homepage;