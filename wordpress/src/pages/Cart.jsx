import { useEffect, useState } from "react";
import styles from "../css/Cart.module.css";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { useMemo } from "react";

function Cart() {
  const cartIdsAndQuantities = useMemo(() => JSON.parse(sessionStorage.getItem("cart")) || [], []);
  const [cart, setCart] = useState([]);

    const api = useMemo(() => new WooCommerceRestApi({
        url: "http://localhost/wordpress",
        consumerKey: "ck_5e95cb54ed15d86edb1bf1bca508a312f746497a",
        consumerSecret: "cs_43fd73802cd957eab8b1fa5e8337ba47f13b14b6",
        version: "wc/v3",
        axiosConfig: {
            headers: {}
        }
    }), []);

  useEffect(() => {
    api.get("products",{
      per_page: 4
    }).then(res => {
      const newArray = [];      
      cartIdsAndQuantities.forEach(idAndQuantity => {
        const found = res.data.find(element => element.id === idAndQuantity.productId);
        newArray.push({product: found, quantity: idAndQuantity.quantity});
      });
      setCart(newArray);
    });
  }, [cartIdsAndQuantities, api]);

  const removeFromCart = (index) => {
    cartIdsAndQuantities.splice(index,1);
    cart.splice(index,1);
    sessionStorage.setItem("cart", JSON.stringify(cartIdsAndQuantities));
    setCart(cart.slice());
  }

  const calculateCartSum = () => {
    let cartSum = 0;
    cart.forEach(element => cartSum = cartSum + element.product.price * element.quantity);
    return cartSum.toFixed(2);
  }

  const calculateCartItems = () => {
    let cartItems = 0;
    cart.forEach(element => cartItems = cartItems + element.quantity);
    return cartItems;
  }

  const emptyCart = () => {
    setCart([]);
    sessionStorage.setItem("cart", JSON.stringify([]));
  }

  const decreaseQuantity = (index) => {
    cartIdsAndQuantities[index].quantity = cartIdsAndQuantities[index].quantity - 1;
    cart[index].quantity = cart[index].quantity - 1;
    if (cartIdsAndQuantities[index].quantity <= 0) {
      removeFromCart(index);
    }
    sessionStorage.setItem("cart", JSON.stringify(cartIdsAndQuantities));
    setCart(cart.slice());
  }

  const increaseQuantity = (index) => {
    cartIdsAndQuantities[index].quantity = cartIdsAndQuantities[index].quantity + 1;
    cart[index].quantity = cart[index].quantity + 1;
    sessionStorage.setItem("cart", JSON.stringify(cartIdsAndQuantities));
    setCart(cart.slice());
  }

  function addOrder() {
    api.post('orders', {
        'line_items': JSON.parse(sessionStorage.getItem('cart')) || []
    })
  }

  return (
    <div>
      { cart.length === 0 && <div>Ostukorv on tühi!</div> } 
      { cart.length > 0 && <button className={styles.info} onClick={emptyCart}>Tühjenda ostukorv</button>}
      { cart.length > 0 && <div className={styles.info}>Ostukorvis on {cart.length} erinevat eset</div>}
      { cart.length > 0 && <div className={styles.info}>Ostukorvis on kokku {calculateCartItems()} eset</div>}
      { cart.length > 0 && <div className={styles.info}>Hind kokku {calculateCartSum()} €</div>}
      {cart.map((element, index) => 
        <div className={styles.product} key={element.product.id}>
          <img className={styles.image} src={element.product.images[0].src} alt="" />
          <div className={styles.name}>{element.product.name}</div>
          <div className={styles.price}>{element.product.price} €</div>
          <div className={styles.quantityControls}>
            <img className={styles.button} onClick={() => decreaseQuantity(index)} src="/minus.png" alt="" />
            <span className={styles.quantity}>{element.quantity} tk</span>
            <img className={styles.button} onClick={() => increaseQuantity(index)} src="/plus.png" alt="" />
          </div>
          <div className={styles.total}>{(element.product.price * element.quantity).toFixed(2)} €</div>
          <img className={styles.button} onClick={() => removeFromCart(index)} src="remove.png" alt="" />
        </div>
      )}
      <button onClick={addOrder}>Complete order</button>
    </div> );
}

export default Cart;