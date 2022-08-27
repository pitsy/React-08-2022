
import { useState } from 'react';
import tegevusteFail from '../tegevused.json'

function Tegevused() {

    const [tegevused, uuendaTegevused] = useState(tegevusteFail);

    function naitaKasutajaUks() {
        const vastus = tegevused.filter(element => element.userId === 1);
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
            <button onClick={() => naitaKoik()}>Kuva koik tegevused tagasi</button>


            {tegevused.map(element => 
                <div>
                    <div>{element.userId}</div>
                    <div>{element.id}</div>
                    <div>{element.title}</div>
                    <div>{element.completed}</div>
                    <br />
                </div> )}
        </div> );
}

export default Tegevused;