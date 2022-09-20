import { useContext } from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import styles from '../css/Cart.module.css';
import CartSumContext from "../store/CartSumContext";

function Cart() {

    const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('cart')) || []);
    const [parcelMachines, setParcelMachines] = useState([]);
    const [selectedPM, setSelectedPM] = useState('');
    const cartSumCtx = useContext(CartSumContext);

    const pmRef = useRef();

    useEffect(() => {
        fetch('https://www.omniva.ee/locations.json')
            .then(res => res.json())
            .then(data => setParcelMachines(data.filter(e => e.A0_NAME === 'EE') || []))
    }, []);

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
        cartSumCtx.setCartSum(total.toFixed(2));
        return total.toFixed(2);
    }

    // tuhjendamine
    function emptyCart() {
        setCart([]);
        sessionStorage.setItem('cart', JSON.stringify([]));
        cartSumCtx.setCartSum(0);
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

    function pmSelected() {
        setSelectedPM(pmRef.current.value);
    }   

    return ( 
        <div>
            { cart.length === 0 && <div className={styles.info}>Ostukorv on tuhi!</div> }
            { cart.length > 0 && <div className={styles.info}>Ostukorvis on {totalQuantity()} eset</div>}
            <br />
            <div className={styles.info}>{ cart.length > 0 && <Button variant='dark' onClick={emptyCart}>Tuhjenda ostukorv</Button>}</div>            <br /><br />
            {cart.map((element, index) => 
                <div className={styles.product} key={element.product.id}>
                    <Link className={styles.link} to={'/product/' + element.name}>
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
            { cart.length > 0 && <div className={styles.product}>
                <div>Pakiautomaadid:</div>
                <select onChange={pmSelected} ref={pmRef}>
                    { parcelMachines.map(element => <option>{element.NAME}</option> ) }
                </select>
                { selectedPM !== '' && <div>Valitud pakiautomaat: {selectedPM}</div>}
            </div>}
            { cart.length > 0 && <div className={styles.info}>{totalPrice()} €</div>}
            <br />
        </div> );
}

export default Cart;