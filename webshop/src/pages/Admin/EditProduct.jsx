import { useRef } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import productsFromFile from '../../data/products.json';

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

    // .find() <-- leian id abil oige ules
    const productFound = productsFromFile.find(element => element.id === Number(id));

    const index = productsFromFile.indexOf(productFound);

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
        productsFromFile[index] = newProduct;
        navigate('/admin/halda-tooteid');
    }

    return ( 
        <div>
            {productFound !== undefined && 
            <div>
                <label>ID </label> <br />
                <input ref={idRef} defaultValue={productFound.id} type="number" /> <br />
                <label>Nimi </label> <br />
                <input ref={nameRef} defaultValue={productFound.name} type="text" /> <br />
                <label>Hind </label> <br />
                <input ref={priceRef} defaultValue={productFound.price} type="number" /> <br />
                <label>Kirjeldus </label> <br />
                <input ref={descriptionRef} defaultValue={productFound.description} type="text" /> <br />
                <label>Kategooria </label> <br />
                <input ref={categoryRef} defaultValue={productFound.category} type="text" /> <br />
                <label>Pilt </label> <br />
                <input ref={imageRef} defaultValue={productFound.image} type="text" /> <br />
                <label>Aktiivne </label> <br />
                <input ref={activeRef} defaultValue={productFound.active} type="checkbox" /> <br />
                <button onClick={updateProduct}>Muuda toode</button>
            </div>}
            {productFound === undefined && <div>Toodet ei leitud</div>}
        </div> );                
}

export default EditProduct;