
import { useState } from 'react';
import tegevusteFail from '../tegevused.json'

function Tegevused() {

    const [tegevused, uuendaTegevused] = useState(tegevusteFail);

    function naitaKasutajaUks() {
        const vastus = tegevused.filter(element => element.userId === 1);
        uuendaTegevused(vastus);
    }

    function naitaKasutajaKaks() {
        const vastus = tegevused.filter(element => element.userId === 2);
        uuendaTegevused(vastus);
    }

    function naitaKasutajaKolm() {
        const vastus = tegevused.filter(element => element.userId === 3);
        uuendaTegevused(vastus);
    }

    function kuvaValmis() {
        const vastus = tegevused.filter(element => element.completed === true);
        uuendaTegevused(vastus);
    }

    function kuvaMitteValmis() {
        const vastus = tegevused.filter(element => element.completed === false);
        uuendaTegevused(vastus);
    }

    function kuvaTAlgavavad() {
        const vastus = tegevused.filter(element =>
        element.title.startsWith('t'));
        uuendaTegevused(vastus);
    }

    function kuva20Tahte() {
        const vastus = tegevused.filter(element =>
        element.title.length > 20);  
        uuendaTegevused(vastus);
    }

    function naitaKoik() {
        uuendaTegevused(tegevusteFail);
    }

    return ( 
        <div>
            <div>Kogu tegevuste arv: {tegevused.length}</div>
            <br />
            <button onClick={() => naitaKasutajaUks()}>Kuva koik kasutaja ID 1 tegevused</button>
            <br />
            <button onClick={() => naitaKasutajaKaks()}>Kuva koik kasutaja ID 2 tegevused</button>
            <br />
            <button onClick={() => naitaKasutajaKolm()}>Kuva koik kasutaja ID 3 tegevused</button>
            <br />
            <button onClick={() => kuvaValmis()}>Kuva koik valmis tegevused</button>
            <br />
            <button onClick={() => kuvaMitteValmis()}>Kuva koik mittevalmis tegevused</button>
            <br />
            <button onClick={() => kuvaTAlgavavad()}>Kuva koik 't' tahega algavad tegevused</button>
            <br />
            <button onClick={() => kuva20Tahte()}>Kuva tegevused, millel on rohkem kui 20 tahte</button>
            <br />
            <button onClick={() => naitaKoik()}>Kuva koik tegevused tagasi</button>


            {tegevused.map(element => 
                <div>
                    <div>{element.userId}</div>
                    <div>{element.id}</div>
                    <div>{element.title}</div>
                    <div>{element.completed + 0}</div>
                    <br />
                </div> )}
        </div> );
}

export default Tegevused;