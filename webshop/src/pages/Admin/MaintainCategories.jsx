import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Spinner from '../../components/Spinner';

function MaintainCategories() {

    const [categories, setCategories] = useState([]);
    const categoryRef = useRef();
    const [isUnique, setUnique] = useState(true);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {             
        setLoading(true);                                             // !!!!!!!!
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/categories.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data || []);
                setLoading(false);
            });
    }, []);

    function addNewCategory() {
        const newCategory = {
            name: categoryRef.current.value,
        }
        categories.push(newCategory);
        setCategories(categories.slice());
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/categories.json', {
            method: 'PUT',
            body: JSON.stringify(categories),
        });
        toast.success("New category added!")
    }

    function findIfCategoryUnique() {
        const index = categories.findIndex(element => element.name === categoryRef.current.value);
        // console.log(index);
        // -1 -> ei leitud
        if (index >= 0) {
            setUnique(false);
            toast.error('Category already exists!');
        } else {
            setUnique(true);
        }
    }

    function deleteCategory(index) {
        categories.splice(index,1);
        setCategories(categories.slice());
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/categories.json', {
            method: 'PUT',
            body: JSON.stringify(categories),
        });
        toast.success("Category deleted")
    }

    return ( 
        <div>
            <ToastContainer />
            <p>Maintain categories</p>
            <div>
                <label>Category </label>
                <input onChange={findIfCategoryUnique} ref={categoryRef} type="text" />
                <button disabled={isUnique === false} onClick={addNewCategory}>Add new category</button>
                <br />
                {isLoading && <Spinner />}
                <br />
                <div>Categories:</div>
                {categories.map((element, index) => 
                    <div key={element.name}>
                        {element.name} 
                        <button onClick={() => deleteCategory(index)}>X</button>
                    </div>)}
            </div>
        </div> );
}

export default MaintainCategories;