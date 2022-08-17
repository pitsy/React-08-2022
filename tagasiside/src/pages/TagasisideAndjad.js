import { useState } from "react";
import andjateFail from '../nimed.json'

function TagasisideAndjad() {

    const [andjad, uuendaAndjad] = useState(andjateFail);

    const filtreeriM = () => {
        const vastus = andjad.filter(element =>
        element.startsWith('M'));
        uuendaAndjad(vastus);
    }

    function filt6kohalised() {
        const vastus = andjad.filter(element => element.length > 6);
        uuendaAndjad(vastus);
        // console.log(vastus);
    }

    function filtreeriY() {
        const vastus = andjad.filter(element => element.endsWith('y'));
        uuendaAndjad(vastus);
    }

    function sortZA() {
        let vastus = andjad.sort();
        vastus = andjad.reverse();
        uuendaAndjad(vastus);
    }

    // function lisaEST() {
    //     uuendaAndjad(andjad.map());
    //     console.log(andjad.map());
    // }

    return ( 
        <div>
            <div>Nimesid on: {andjad.length}</div>
            <button onClick={() => filtreeriM()}>Filtreeri M tahega algavad nimed</button> <br />
            <button onClick={() => filt6kohalised()}>Filtreeri 6 kohalised nimed</button><br />
            <button onClick={() => filtreeriY()}>Filtreeri Y tahega loppevad nimed</button><br />
            <button onClick={() => sortZA()}>Sorteeri Z-A</button><br />
            <button>Kirjuta iga nime ette "EST-"</button><br />
            <button>Leia "Paul" jarjekorranumber ja kuva</button><br />
            <button>Kuva esimene kellel on D tahega algav nimi</button>
        </div> );
}

export default TagasisideAndjad;