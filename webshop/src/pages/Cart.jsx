import { useState } from "react";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

function Cart() {

    const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('cart')) || []);

    // eemaldamine 
    function removeProduct(index) {
        cart.splice(index,1);
        setCart(cart.slice()); 
        sessionStorage.setItem('cart', JSON.stringify(cart)); 
    }

    // kogusumma
    function totalPrice() {
        let total = 0;
        cart.forEach(element => total += element.price);
        return total.toFixed(2);
    }

    // tuhjendamine
    function emptyCart() {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    }

    // HTML-s esemente tk lisamine
    function productAmount() {
        
    }

    return ( 
        <div>
            <div>Ostukorvis on {cart.length} eset</div>
            <div>Kogusumma: {totalPrice()} €</div>
            <br />
            <Button onClick={emptyCart}>Tuhjenda ostukorv</Button>
            <br /><br />
            {cart.map((element, index) => 
                <div key={index}>
                    <Link to={'/product/' + element.name}>
                        <img src={element.image} alt="" />
                        <div>{element.name}</div>
                    </Link>
                    <div>Kogus: {productAmount}</div>
                    <div>{element.price}</div>
                    <Button onClick={() => removeProduct(index)}>X</Button>
                    <br /><br />
                </div>
            )}
        </div> );
}

export default Cart;