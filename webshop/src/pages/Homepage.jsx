import productsFromFile from '../data/products.json';
import Button from 'react-bootstrap/Button';

function Homepage() {

    // "scraping" python
    // id: number;
    // image: string;
    // name: string;
    // price: number;
    // description: string;
    // category: string;
    // active: boolean;

    function addToCart(productClicked) {
        let cart = sessionStorage.getItem('cart'); // sessionStorage kaob brauseri sulgemisel
        cart = JSON.parse(cart) || [];
        cart.push(productClicked);
        cart = JSON.stringify(cart);
        sessionStorage.setItem('cart', cart);
    }

    return ( 
        <div>
            <div>{productsFromFile.length} tk</div>
            {productsFromFile.map(element => 
                <div key={element.id}>
                    <img src={element.image} alt="" />
                    <div>{element.name}</div>
                    <div>{element.price}</div>
                    <Button onClick={() => addToCart(element)}>Lisa ostukorvi</Button>
                </div> )}
        </div> );
}

export default Homepage;