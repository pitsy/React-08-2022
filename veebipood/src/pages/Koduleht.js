import { useState } from "react";
import { Link } from 'react-router-dom';

function Koduleht() {

    const [tooted, uuendaTooted] = useState(JSON.parse(localStorage.getItem('tooted'))  || []);

    function sortAZ() {
        tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
        uuendaTooted(tooted.slice());
    }

    function sortZA() {
        tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
        uuendaTooted(tooted.slice());
    }

    function sortHindKasvavalt() {
        tooted.sort((a,b) => a.hind - b.hind);
        uuendaTooted(tooted.slice());
    }

    function sortHindKahanevalt() {
        tooted.sort((a,b) => b.hind - a.hind);
        uuendaTooted(tooted.slice());
    }

    const lisaOstukorvi = (klikitudToode) => {
        console.log(klikitudToode);
        let ostukorv = localStorage.getItem('ostukorv');
        ostukorv = JSON.parse(ostukorv) || [];
        ostukorv.push(klikitudToode);
        ostukorv = JSON.stringify(ostukorv);
        localStorage.setItem('ostukorv', ostukorv);
    }

    return ( 
        <div>
            <button onClick={sortAZ}>Sorteeri tahestiku jargi</button>
            <button onClick={sortZA}>Sorteeri tahestiku jargi kahanevalt</button>
            <button onClick={sortHindKasvavalt}>Sorteeri hinna jargi kasvavalt</button>
            <button onClick={sortHindKahanevalt}>Sorteeri hinna jargi kahanevalt</button>

            {tooted.filter(element => element.aktiivsus === true).map( (element,index) => 
                <div key={index}>
                    <Link to={'/toode/' + element.nimi}>
                        <div>{element.nimi}</div>
                        <div>{element.hind}</div>
                        <div>{element.aktiivsus}</div>
                    </Link>                    
                    <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
                </div>)}
        </div> );
}

export default Koduleht;