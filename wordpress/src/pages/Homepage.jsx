import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import {useEffect, useState} from 'react';

function Homepage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const api = new WooCommerceRestApi({
            url: "http://localhost/wordpress",
            consumerKey: "ck_5e95cb54ed15d86edb1bf1bca508a312f746497a",
            consumerSecret: "cs_43fd73802cd957eab8b1fa5e8337ba47f13b14b6",
            version: "wc/v3",
            axiosConfig: {
            headers: {}
            }
        });
        api.get('products', {
            per_page: 5
        }).then(res => setProducts(res.data));
    }, []);

    function addToCart(productClicked) {
        let cart = sessionStorage.getItem('cart');
        cart = JSON.parse(cart) || [];
        const index = cart.findIndex(element => element.productId === productClicked.id);
        if (index >= 0) {
            cart[index].quantity++;
        } else {
            cart.push({productId: productClicked.id, quantity: 1});
        }
        cart = JSON.stringify(cart);
        sessionStorage.setItem('cart', cart);
    }

    return ( 
        <div>
            {products.map(element => 
            <div>        
                <img className='product-image' src={element.images[0].src} alt="" />
                <div>{element.name}</div> 
                <div>${element.price}</div>
                <button onClick={() => addToCart(element)}>lisa ostukorvi</button>
            </div> )}
        </div> );
}

export default Homepage;