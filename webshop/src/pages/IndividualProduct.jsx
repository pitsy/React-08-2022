import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';

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
            {clickedProduct !== undefined && <div>  
                <img src={clickedProduct.image} alt="" /> 
                <div>{ clickedProduct.name}</div>
                <div>{ clickedProduct.price} €</div>
                <div>{ clickedProduct.description}</div>
                <Button onClick={() => addToCart(clickedProduct)}>Lisa ostukorvi</Button>
            </div>}
            {clickedProduct === undefined && <div>Toodet ei leitud</div> }
        </div> );
}

export default IndividualProduct;