import { useState } from "react";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import styles from '../css/Cart.module.css';

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
        cart.forEach(element => total = total + element.product.price * element.quantity);
        return total.toFixed(2);
    }

    // tuhjendamine
    function emptyCart() {
        setCart([]);
        localStorage.setItem('cart', JSON.stringify([]));
    }

    function decreaseQuantity(index) {
        cart[index].quantity -= 1;
        if (cart[index].quantity === 0) {
            removeProduct(index);
        }
        setCart(cart.slice()); 
        sessionStorage.setItem('cart', JSON.stringify(cart)); 
    }

    function increaseQuantity(index) {
        cart[index].quantity += 1;
        setCart(cart.slice()); 
        sessionStorage.setItem('cart', JSON.stringify(cart)); 
    }

    function totalQuantity() {
        let total = 0;
        cart.forEach(element => total = total + element.quantity);
        return total;
    }

    return ( 
        <div>
            { cart.length === 0 && <div>Ostukorv on tuhi!</div> }
            { cart.length > 0 && <div className={styles.info}>Ostukorvis on {totalQuantity()} eset</div>}
            { cart.length > 0 && <div className={styles.info}>Kogusumma: {totalPrice()} €</div>}
            <br /><br />
            {cart.map((element, index) => 
                <div className={styles.product} key={element.product.id}>
                    <Link to={'/product/' + element.name}>
                        <img className={styles.image} src={element.product.image} alt="" />
                        <div className={styles.name}>{element.product.name}</div>
                    </Link>
                    <div className={styles.quanitityControls}>
                        <img className={styles.button} onClick={() => decreaseQuantity(index)} src={require('../images/minus.png')} alt='' />
                        <span className={styles.quantity}> Kogus: {element.quantity} </span>
                        <img className={styles.button} onClick={() => increaseQuantity(index)} src={require('../images/plus.png')} alt='' />
                    </div>
                    <div className={styles.price}>Toote hind: {element.product.price} €</div>
                    <div className={styles.total}>Hind kokku: {(element.product.price * element.quantity).toFixed(2)} €</div>
                    <img className={styles.button} onClick={() => removeProduct(index)} src={require('../images/remove.png')} alt='' />
                    <br /><br />
                </div>
            )}
            <br />
            <div className={styles.info}>{ cart.length > 0 && <Button onClick={emptyCart}>Tuhjenda ostukorv</Button>}</div>
        </div> );
}

export default Cart;