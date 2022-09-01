import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';

function MaintainCategories() {

    const [categories, setCategories] = useState([]);
    const categoryRef = useRef();
    const [isUnique, setUnique] = useState(true);

    useEffect(() => {                                                          // !!!!!!!!
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data || []));
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
        toast.success("Uus kategooria edukalt lisatud!")
    }

    function findIfCategoryUnique() {
        const index = categories.findIndex(element => element.name === categoryRef.current.value);
        // console.log(index);
        // -1 -> ei leitud
        if (index >= 0) {
            setUnique(false);
            toast.error('Kategooria on juba olemas!');
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
    }

    return ( 
        <div>
            <ToastContainer />
            <p>Halda kategooriaid</p> <br />
            <div>
                <label>Kategooria</label>
                <input onChange={findIfCategoryUnique} ref={categoryRef} type="text" />
                <button disabled={isUnique === false} onClick={addNewCategory}>Lisa uus kategooria</button>
                <br /><br />
                <div>Kategooriad:</div>
                {categories.map((element, index) => 
                    <div key={element.name}>
                        {element.name} 
                        <button onClick={() => deleteCategory(index)}>X</button>
                    </div>)}
            </div>
        </div> );
}

export default MaintainCategories;