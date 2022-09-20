import { useState, createContext } from "react";

const CartSumContext = createContext({
    cartSum: 0,
    setCartSum: (newCartSum) => {}
});

export const CartSumContextProvider = (props) => {
    const [cartSum, setCartSum] = useState(calculateCartSum());

    function calculateCartSum() {
        let cart = sessionStorage.getItem('cart'); // sessionStorage kaob brauseri sulgemisel
        cart = JSON.parse(cart) || [];
        let total = 0;
        cart.forEach(element => total = total + element.product.price * element.quantity);
        return total.toFixed(2);
    }

    return (
        <CartSumContext.Provider value={{
            cartSum: cartSum,
            setCartSum: setCartSum
        }}>
            {props.children}
        </CartSumContext.Provider>
    )
}

export default CartSumContext;