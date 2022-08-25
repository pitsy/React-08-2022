import { useState } from "react";

function Cart() {

    const [cart, setCart] = useState(JSON.parse(sessionStorage.getItem('cart')) || []);

    // eemaldamine 
    function removeProduct(index) {
        cart.splice(index,1);
        setCart(cart.slice()); 
        sessionStorage.setItem('cart', JSON.stringify(cart)); 
    }

    // kogusumma

    // tuhjendamine

    // HTML-s esemente tk lisamine

    return ( 
        <div>
            {cart.map((element, index) => 
                <div key={index}>
                    <img src={element.image} alt="" />
                    <div>{element.name}</div>
                    <div>{element.price}</div>
                    <button onClick={() => removeProduct(index)}>X</button>
                </div>
            )}
        </div> );
}

export default Cart;