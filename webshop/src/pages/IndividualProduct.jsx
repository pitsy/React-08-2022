import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import styles from '../css/IndividualProduct.module.css';

function IndividualProduct() {

    const {name} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/products.json')
            .then(res => res.json())
            .then(data => 
                setProducts(data || [])
            );
    }, []);

    const clickedProduct = products.find(element => element.name === name);

    function addToCart(productClicked) {
        let cart = sessionStorage.getItem('cart'); // sessionStorage kaob brauseri sulgemisel
        cart = JSON.parse(cart) || [];
        cart.push(productClicked);
        cart = JSON.stringify(cart);
        sessionStorage.setItem('cart', cart);
        toast.success(clickedProduct.name + ' ostukorvi lisatud!');
    }

    return ( 
        <div>
            <ToastContainer />
            <div className={styles.display}>
                {clickedProduct !== undefined && <div className={styles.container}>  
                    <img  className={styles.img} src={clickedProduct.image} alt="" /> 
                </div>}
                <Container className={styles.info}>
                    {clickedProduct !== undefined && <div>  
                        <div><h2>{ clickedProduct.name}</h2></div>
                        <div className={styles.description}>{ clickedProduct.description}</div>
                        <br />
                        <div className={styles.price}>{ clickedProduct.price} €</div>
                        <Button className={styles.button} variant='dark' onClick={() => addToCart(clickedProduct)}>Lisa ostukorvi</Button>
                    </div>}
                </Container>
            </div>
            {clickedProduct === undefined && <div>Toodet ei leitud</div> }
        </div> );
}

export default IndividualProduct;