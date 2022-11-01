import { useContext } from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import styles from '../css/Cart.module.css';
import CartSumContext from "../store/CartSumContext";
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

function Cart() {

    const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('cart')) || []);
    const [parcelMachines, setParcelMachines] = useState([]);
    const [selectedPM, setSelectedPM] = useState('');
    const cartSumCtx = useContext(CartSumContext);
    const { t } = useTranslation();

    const pmRef = useRef();

    useEffect(() => {
        fetch('https://www.omniva.ee/locations.json')
            .then(res => res.json())
            .then(data => setParcelMachines(data.filter(e => e.A0_NAME === 'EE') || []))
    }, []);

    const templateParams = {
        message: 'Keegi tegi tellimuse summas: ' + totalPrice(),
        from_name: 'Mihkel',
        to_name: 'Webshop',
        to_email: '',
    };

    function sendEmail() {    
        emailjs.send('service_te0gqhi', 'template_g37h4uy', templateParams, 'N81kjonDYPn1JTXa0')
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
        });
    };

    function removeProduct(index) {
        cart.splice(index,1);
        setCart(cart.slice()); 
        sessionStorage.setItem('cart', JSON.stringify(cart));
        cartSumCtx.setCartSum(totalPrice());
    }

    function totalPrice() {
        let total = 0;
        cart.forEach(element => total = total + element.product.price * element.quantity);
        cartSumCtx.setCartSum(total.toFixed(2));
        return total.toFixed(2);
    }

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
        cartSumCtx.setCartSum(totalPrice());
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
            <br />
            { cart.length === 0 && <div className={styles.info}>{t('cart.empty-message')}</div> }
            { cart.length > 0 && <div className={styles.info}>{totalQuantity()} {t('cart.items')}</div>}
            <br />
            <div className={styles.info}>{ cart.length > 0 && <Button variant='dark' onClick={emptyCart}>{t('cart.empty-button')}</Button>}</div>            <br /><br />
            {cart.map((element, index) => 
                <div className={styles.product} key={element.product.id}>
                    <Link className={styles.link} to={'/product/' + element.name}>
                        <img className={styles.image} src={element.product.image} alt="" />
                        <div className={styles.name}>{element.product.name}</div>
                    </Link>
                    <div className={styles.quanitityControls}>
                        <img className={styles.button} onClick={() => decreaseQuantity(index)} src={require('../images/minus.png')} alt='' />
                        <span className={styles.quantity}> {t('cart.quantity')}: {element.quantity} </span>
                        <img className={styles.button} onClick={() => increaseQuantity(index)} src={require('../images/plus.png')} alt='' />
                    </div>
                    <div className={styles.price}>{t('cart.price')}: {element.product.price} $</div>
                    <div className={styles.total}>{t('cart.total-price')}: {(element.product.price * element.quantity).toFixed(2)} $</div>
                    <img className={styles.button} onClick={() => removeProduct(index)} src={require('../images/remove.png')} alt='' />
                    <br /><br />
                </div>
            )}
            { cart.length > 0 && <div className={styles.product}>
                <div>{t('cart.parcel-machines')}:</div>
                <select onChange={pmSelected} ref={pmRef}>
                    { parcelMachines.map(element => <option>{element.NAME}</option> ) }
                </select>
                { selectedPM !== '' && <div>{t('cart.selected-parcelm')}: {selectedPM}</div>}
            </div>}
            { cart.length > 0 && <div className={styles.info}>{totalPrice()} $</div>}
            <br />
            { cart.length > 0 && <div className={styles.info}><Button variant='dark' onClick={sendEmail}>{t('cart.confirm')}</Button></div> }
            <br /><br />
        </div> );
}

export default Cart;