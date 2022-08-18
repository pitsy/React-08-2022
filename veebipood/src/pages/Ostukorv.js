import { useState } from "react";

function Ostukorv() {

    const [ostukorv, uuendaOstukorvi] = useState(JSON.parse(localStorage.getItem('ostukorv')) || []);

    const eemalda = (index) => {
        ostukorv.splice(index,1);
        uuendaOstukorvi(ostukorv.slice()); // uuendab htmli
        localStorage.setItem('ostukorv', JSON.stringify(ostukorv)); // salvestab
    }

    function tuhjenda() {
        uuendaOstukorvi([]);
        localStorage.setItem('ostukorv', JSON.stringify([]));
    }

    return ( 
        <div>
            {ostukorv.length > 0 && <button onClick={tuhjenda}>Tuhjenda</button>}
            {ostukorv.length > 0 && <div>Ostukorvis on {ostukorv.length} eset</div>}
            { ostukorv.length === 0 && <div>Ostukorv on tuhi!</div> }
            { ostukorv.map( (element, index) => 
            <div key={index}> 
                <div>Ostukorvis on {element}</div>
                <button onClick={() => eemalda(index)}>Eemalda ostukorvist {element}</button>
            </div>) }
        </div> );
}

export default Ostukorv;