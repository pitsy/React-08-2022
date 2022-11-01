// import productsFromFile from '../data/products.json';
import { Container } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import Spinner from '../components/Spinner';
import CarouselGallery from '../components/home/CarouselGallery';
import SortButtons from '../components/home/SortButtons';
import PageButtons from '../components/home/PageButtons';
import CategoryFilter from '../components/home/CategoryFilter';
import ProductGallery from '../components/home/ProductGallery';
import { ToastContainer, toast } from 'react-toastify';
import styles from '../css/Homepage.module.css';
import { useTranslation } from 'react-i18next';
import CartSumContext from '../store/CartSumContext';

function Homepage() {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [dbProducts, setDbProducts] = useState([]);
    // js get unique values from array
    const categories = [...new Set(dbProducts.map(element => element.category))].sort();
    const [activeCategory, setActiveCategory] = useState('all');
    const { t } = useTranslation();
    const [activePage, setActivePage] = useState(1);
    const cartSumCtx = useContext(CartSumContext);

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
        const index = cart.findIndex(element => element.product.id === productClicked.id);
        if (index >= 0) {
            // suurenda kogust
            // otsin jarjekorranumbriga ules ja muudan kogust
            cart[index].quantity = cart[index].quantity + 1;
        } else {
            cart.push({product: productClicked, quantity: 1});
        }
        let total = 0;
        cart.forEach(element => total = total + element.product.price * element.quantity);
        cartSumCtx.setCartSum(total.toFixed(2));

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
                <CategoryFilter 
                    filterByCategory={filterByCategory}
                    actCategory={activeCategory}
                    categories={categories}
                />

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
                    <ProductGallery 
                        products={products}
                        addToCart={addToCart}
                    />

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