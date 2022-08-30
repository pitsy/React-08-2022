import productsFromFile from '../data/products.json';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Homepage() {

    const [products, setProducts] = useState(productsFromFile);

    // js get unique values from array
    const categories = [...new Set(productsFromFile.map(element => element.category))];
    const [activeCategory, setActiveCategory] = useState('all');

    // "scraping" python

    function addToCart(productClicked) {
        let cart = sessionStorage.getItem('cart'); // sessionStorage kaob brauseri sulgemisel
        cart = JSON.parse(cart) || [];
        cart.push(productClicked);
        cart = JSON.stringify(cart);
        sessionStorage.setItem('cart', cart);
    }

    function filterByCategory(categoryClicked) {
        if (categoryClicked === 'all') {
            setProducts(productsFromFile);
            setActiveCategory('all');
        } else {
            const result = productsFromFile.filter(element => element.category === categoryClicked);
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

    return ( 
        <div>
            <div> <i>Uksiku toote vaatamine kodus</i> </div> <br />
            <div className={activeCategory ==='all' ? 'active-category' : undefined} onClick={() => filterByCategory('all')}>Koik kategooriad</div>
            <div>{categories.map((element, index) => 
                <div key={index} className={activeCategory === element ? 'active-category' : undefined} 
                onClick={() => filterByCategory(element)}>{element}</div>)}
            </div>
            <br />
            <button onClick={sortAZ}>Sort A-Z</button>
            <button onClick={sortZA}>Sort Z-A</button>
            <button onClick={sortPriceAsc}>Sort price ascending</button>
            <button onClick={sortPriceDesc}>Sort price descending</button>
            <div>{products.length} tk</div>
            {products.map(element => 
                <div key={element.id}>
                    <img src={element.image} alt="" />
                    <div>{element.name}</div>
                    <div>{element.price}</div>
                    <Button onClick={() => addToCart(element)}>Lisa ostukorvi</Button>
                </div> )}
        </div> );
}

export default Homepage;