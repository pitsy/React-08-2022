import { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
// import productsFromFile from '../../data/products.json';
import { ToastContainer, toast } from 'react-toastify';

function MaintainProducts() {

    const [products, setProducts] = useState([]);
    const [dbProducts, setDbProducts] = useState([]); // <-- seda ei muuda kunagi
    const searchedRef = useRef();

    // uef
    useEffect(() => {
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data || []);
                setDbProducts(data || []);
            });
    }, []);

    function deleteProduct(productClicked) {
        const index = dbProducts.findIndex(element=> element.id === productClicked.id);
        dbProducts.splice(index,1);
        setDbProducts(dbProducts.slice());
        searchProducts();
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/products.json', {
            method: 'PUT',
            body: JSON.stringify(dbProducts)
        });
        toast.success("Toode edukalt kustutatud!", {
            theme: 'dark',
            position: 'bottom-right'
        });
    }

    function searchProducts() {
        const result = dbProducts.filter(element => 
            element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()) ||
            element.id.toString().includes(searchedRef.current.value));
        setProducts(result);
    }

    function changeProductActive(productClicked) {
        const index = dbProducts.findIndex(element=> element.id === productClicked.id);
        dbProducts[index].active = !dbProducts[index].active;
        setDbProducts(dbProducts.slice());
        searchProducts();
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/products.json', {
            method: 'PUT',
            body: JSON.stringify(dbProducts)
        });
    }

    return ( 
        <div>
            <ToastContainer />
            <div className='search'>
                <span>Otsi tooteid: </span><input type="text" ref={searchedRef} onChange={searchProducts} />
                <span> {products.length}</span>
            </div>            
            {products.map(element =>
                <div key={element.id} className={element.active ? 'active-product' : 'inactive-product'}>
                    <div onClick={() => changeProductActive(element)}>
                        <div>{element.id}</div>
                        <div><b>{element.name}</b></div>
                        <img src={element.image} alt="" />
                        <div>{element.price}</div>
                        <div>{element.category}</div>
                        <div>{element.description}</div>
                        <div>{element.active}</div>
                    </div>
                    <button onClick={() => deleteProduct(element)}>X</button>
                    <Link to={'/admin/muuda-toode/' + element.id}>
                        <button>Muuda toode</button>
                    </Link>
                </div> )}
        </div> );
}

export default MaintainProducts;