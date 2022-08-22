import { useState } from "react";

function Exercise_12() {

    const [kraam, uuendaKraami] = useState(['shoes', 'shirts', 'socks', 'sweaters', 'pigs', 'goats', 'sheep',
    'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'March', 'Jan', 'Feb', 'Dec']);

    function kustuta(index) {
        kraam.splice(index,1);
        uuendaKraami(kraam.slice());
    }

    function tuhjenda() {
        uuendaKraami([]);
    }

    function sorteeri() {
        const sortCopy = [...kraam];
        let tulemus = sortCopy.sort((a,b) => {
            const nameA = a.toUpperCase(); // ignore upper and lowercase
            const nameB = b.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        uuendaKraami(tulemus);
    }

    function tahed() {
        let vastus = kraam.filter(element => element.length > 4);
        uuendaKraami(vastus);
    }

    function lisa() {
        let vastus = kraam.push('chickens', 'cats', 'dogs');
        uuendaKraami(kraam.slice());
    }

    return ( 
        <div>
            Pask:
            {kraam.map((element, index) =>
            <div key={index}>
                <span>{element} </span>
                <button onClick={() => kustuta(index)}>X</button>
            </div>)}
            <br />
            {kraam.length > 0 && <button onClick={() => tuhjenda()}>DELETE EVERYTHING</button>}
            <br />
            <button onClick={() => sorteeri()}>Sorteeri A-Z</button>
            <br />
            <button onClick={() => tahed()}>Jata alles ule nelja tahelised</button>
            <br />
            <button onClick={() => lisa()}>Lisa paska</button>
        </div> );
}

export default Exercise_12;