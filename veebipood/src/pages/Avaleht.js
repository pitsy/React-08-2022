import { useState } from "react";
import productsFromFile from '../data/products.json';

function Aveleht() {

    const [kogus, uuendaKogus] = useState(30);
    const [tootenimi, uuendaTooteNimi] = useState("Telefon mudeliga " + localStorage.getItem("toode"));
    const [tooteKategooria, uuendaKategooria] = useState("Telefon");

    const [products, setProducts] = useState(productsFromFile.data);

    const v2henda = () => {
        uuendaKogus(kogus - 1);
    }
    const suurenda = () => {
        uuendaKogus(kogus + 1);
    }
    const change2english = () => {
        uuendaTooteNimi("Phone model " + localStorage.getItem("toodeENG"));
        uuendaKategooria("Telephone");
    }

    function sortAZ() {
        products.sort((a,b) => a.name.localeCompare(b.name));
        setProducts(products.slice());
    }

    function sortPriceAsc() {
        products.sort((a,b) => a.price - b.price);
        setProducts(products.slice());
    }

    return ( 
    <div>
        <div>{tootenimi}</div>
        <div>{tooteKategooria}</div>
        <button onClick={change2english}>Muuda keelt</button> <br />
        <button onClick={v2henda}>vahenda</button>
        <div>{kogus}</div>
        <button onClick={suurenda}>suurenda</button>
        <br /><br />
        <button onClick={sortAZ}>Sort A-Z</button>
        <button onClick={sortPriceAsc}>Sort by price ascending</button>
        <div>Muud tooted:</div>
        {
            products.map(element => 
                <div key={element.id}>
                    <img src={element.image} alt="" />
                    <div>{element.name} ({element.name.length})</div>
                    <div>{(Number(element.price) * 1.02).toFixed(2)} $</div>
                    <br />
                </div>)
        }
    </div> );
}

export default Aveleht;