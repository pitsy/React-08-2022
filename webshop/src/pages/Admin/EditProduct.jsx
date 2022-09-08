import { useEffect, useRef, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
// import productsFromFile from '../../data/products.json';

function EditProduct() {

    const idRef = useRef();
    const nameRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const imageRef = useRef();
    const activeRef = useRef();
    const navigate = useNavigate();
    const {id} = useParams(); // useParams tuleb alati string
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [idUnique, setIdUnique] = useState(true);

    // .find() <-- leian id abil oige ules
    const productFound = products.find(element => element.id === Number(id));

    const index = products.indexOf(productFound);

    useEffect(() => {
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/products.json')
            .then(res => res.json())
            .then(data => setProducts(data || []));

        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data || []));
    }, []);

    function updateProduct() {
        const newProduct = {
            id: Number(idRef.current.value), // saab jutumarkides vaartuse
            name: nameRef.current.value,
            price: Number(priceRef.current.value),
            description: descriptionRef.current.value,
            category: categoryRef.current.value,
            image: imageRef.current.value,  
            active: activeRef.current.checked,
        }
        products[index] = newProduct;
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/products.json', {
            method: 'PUT',
            body: JSON.stringify(products),
        }).then(() => navigate('/admin/halda-tooteid')); //!!! navigatib ainult siis kui fetchitud on !!!
    }

    function checkIdUniqueness() {
        // kui ei ole: -1
        const index = products.findIndex(element => element.id === Number(idRef.current.value));
        if (index >= 0 && productFound.id !== Number(idRef.current.value)) {
            // ei ole unikaalne
            setIdUnique(false);
        } else {
            setIdUnique(true);
        }
    }

    return ( 
        <div>
            {productFound !== undefined && 
            <div>
                { !idUnique && <div>Sisestasid mitteunikaalse ID!</div>}
                <label>ID </label> <br />
                <input onChange={checkIdUniqueness} ref={idRef} defaultValue={productFound.id} type="number" /> <br />
                <label>Nimi </label> <br />
                <input ref={nameRef} defaultValue={productFound.name} type="text" /> <br />
                <label>Hind </label> <br />
                <input ref={priceRef} defaultValue={productFound.price} type="number" /> <br />
                <label>Kirjeldus </label> <br />
                <input ref={descriptionRef} defaultValue={productFound.description} type="text" /> <br />
                <label>Kategooria </label> <br />
                <select ref={categoryRef} defaultValue={productFound.category}>
                    {categories.map(element => <option key={element.name}>{element.name}</option>)}
                </select> <br />
                <label>Pilt </label> <br />
                <input ref={imageRef} defaultValue={productFound.image} type="text" /> <br />
                <label>Aktiivne </label> <br />
                <input ref={activeRef} defaultValue={productFound.active} type="checkbox" /> <br />
                <button disabled={!idUnique} onClick={updateProduct}>Muuda toode</button>
            </div>}
            {productFound === undefined && <div>Toodet ei leitud</div>}
        </div> );                
}

export default EditProduct;