import { useState } from "react";
import andjateFail from '../nimed.json'

function TagasisideAndjad() {

    const [andjad, uuendaAndjad] = useState(andjateFail);
    const [vastus, uuendaVastus] = useState("");

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
        // console.log(vastus);
    }

    function lisaEST() {
        const vastus = andjad.map(nimi => "EST-" + nimi);
        uuendaAndjad(vastus);
    }

    function findName() {
        uuendaVastus(andjad.indexOf('Paul'));
    }

    function findLetter() {
        let vastus = andjad.find(andja => andja.startsWith("D"));
        uuendaVastus(vastus);
    }


    return ( 
        <div>
            <div>Nimesid on: {andjad.length}</div>
            <button onClick={() => filtreeriM()}>Filtreeri M tahega algavad nimed</button> <br />
            <button onClick={() => filt6kohalised()}>Filtreeri 6 kohalised nimed</button><br />
            <button onClick={() => filtreeriY()}>Filtreeri Y tahega loppevad nimed</button><br />
            <button onClick={() => sortZA()}>Sorteeri Z-A</button><br />
            <button onClick={() => lisaEST()}>Kirjuta iga nime ette "EST-"</button><br />
            <button onClick={() => findName()}>Leia "Paul" jarjekorranumber ja kuva</button><br />
            <button onClick={() => findLetter()}>Kuva esimene kellel on D tahega algav nimi</button><br />
            <div>Vastus on: {vastus}</div>
        </div> );
}

export default TagasisideAndjad;