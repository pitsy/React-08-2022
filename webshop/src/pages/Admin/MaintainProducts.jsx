import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
// import productsFromFile from '../../data/products.json';

function MaintainProducts() {

    const [products, setProducts] = useState([]);

    // uef
    useEffect(() => {
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/products.json')
            .then(res => res.json())
            .then(data => setProducts(data || []));
    }, []);

    function deleteProduct(index) {
        products.splice(index,1);
        setProducts(products.slice());
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/products.json', {
            method: 'PUT',
            body: JSON.stringify(products),
        });
    }

    return ( 
        <div>
            {products.map((element, index) =>
                <div key={element.id}>
                    <div>{element.id}</div>
                    <div>{element.name}</div>
                    <div>{element.price}</div>
                    <div>{element.image}</div>
                    <div>{element.category}</div>
                    <div>{element.description}</div>
                    <div>{element.active}</div>
                    <button onClick={() => deleteProduct(index)}>X</button>
                    <Link to={'/admin/muuda-toode/' + element.id}>
                        <button>Muuda toode</button>
                    </Link>
                </div> )}
        </div> );
}

export default MaintainProducts;