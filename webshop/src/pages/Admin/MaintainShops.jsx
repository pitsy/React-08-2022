import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function MaintainShops() {

    const shopRef = useRef();
    const openTimeRef = useRef();
    const latitudeRef = useRef();
    const longitudeRef = useRef();
    const [shops, setShops] = useState([]);
    const dbUrl = 'https://react0922-default-rtdb.europe-west1.firebasedatabase.app/shops.json';

    useEffect(() => {
        fetch(dbUrl).then(response => response.json())
        .then(responseBody => {
            const shopsFromDb = [];
            for (const key in responseBody) {
                shopsFromDb.push(responseBody[key]);
            }
            setShops(shopsFromDb);
        })
    }, []);

    function addShop() {
        const newShop = {
            name: shopRef.current.value,
            openTime: openTimeRef.current.value,
            latitude: latitudeRef.current.value,
            longitude: longitudeRef.current.value,
        }

        fetch(dbUrl, {
            method: 'POST',
            body: JSON.stringify(newShop),
            'headers': {
                'Content-Type': 'application/json'
            }
        })

        shops.push(newShop);
        setShops(shops.slice());
        shopRef.current.value = '';
        openTimeRef.current.value = '';
        latitudeRef.current.value = '';
        longitudeRef.current.value = '';
        toast.success('Pood lisatud');
    }

    function deleteShop(shop) {
        const index = shops.findIndex(element => element.name === shop.name);
        shops.splice(index,1);
        setShops(shops.slice());
        
        fetch(dbUrl, {
            method: 'PUT',
            body: JSON.stringify(shops),
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        toast.error('Pood kustutatud');
    }

    return ( 
        <div>
            <label>Poe nimi</label> <br />
            <input ref={shopRef} type="text" /> <br />
            <label>Poe lahtiolekuaeg</label> <br />
            <input ref={openTimeRef} type="text" /> <br />
            <label>Poe laiuskraad</label> <br />
            <input ref={latitudeRef} type="text" /> <br />
            <label>Poe pikkuskraad</label> <br />
            <input ref={longitudeRef} type="text" /> <br /><br />
            <button onClick={() => addShop()}>Lisa</button>
            <br /><br />
            {shops.map(element =>
                <div>
                    <div>{element.name}</div>
                    <div>{element.openTime}</div>
                    <div>{element.latitude}</div>
                    <div>{element.longitude}</div>
                    <button onClick={() => deleteShop(element)}>X</button>
                </div> )}
            <ToastContainer />
        </div> );
}

export default MaintainShops;