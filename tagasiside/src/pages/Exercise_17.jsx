import { useState } from 'react';
import kasutajateFail from '../kasutajad.json';

function Exercise_17() {

    const [kasutajad, uuendaKasutajad] = useState(kasutajateFail);
    const [jarjekorrasKasutaja, uuendaJarjekorda] = useState([
        // {kasutaja: '', jarjekorraNum: ''}
    ]);

    function viewAll() {
        uuendaKasutajad(kasutajateFail);
    }

    function view10PlusUsername() {
        const vastus = kasutajad.filter(element => 
        element.username.length >= 10);
        uuendaKasutajad(vastus);
    }

    function addToCue(username, index) {
        const uusKasutaja = username
        // console.log(uusKasutaja);
        jarjekorrasKasutaja.push(uusKasutaja);
        uuendaJarjekorda(jarjekorrasKasutaja.slice());
        kasutajad.splice(index,1);
        uuendaKasutajad(kasutajad.slice());
    }

    function findEmail() {
        const vastus = kasutajad.findIndex(user => user.email === 'Lucio_Hettinger@annie.ca');
        console.log(vastus);
    }

    function findFirstLetter() {
        const vastus = kasutajad.find(user => user.name.startsWith('C'));
        console.log(vastus.name);
    }

    function sortByLat() {
        kasutajad.sort((a,b) => a.address.geo.lat - b.address.geo.lat);
        uuendaKasutajad(kasutajad.slice());
    }

    function filterPositiveLng() {
        const vastus = kasutajad.filter(element => element.address.geo.lng > 0);
        uuendaKasutajad(vastus);
    }

    function addIDs() {
        let vastus = 0;
        kasutajad.forEach(element => vastus += element.id);
        console.log(vastus);
    }

    function lisa000NumbriEtte() {
        const vastus = kasutajad.map(element => ({...element, phone: '000-' + element.phone}));
        uuendaKasutajad(vastus);
    }

    function makeEmailArray() {
        const vastus = kasutajad.map(element => element.email);
        console.log(vastus);
    }

    function replaceLetter() {
        const vastus = kasutajad.map(element => 
            ({...element, company: {...element.company, catchPhrase: element.company.catchPhrase.replaceAll('a','e')}}));
        uuendaKasutajad(vastus);
    }

    return ( 
        <div>
            <div>Kasutajate arv: {kasutajad.length}</div>
            <button onClick={viewAll}>Kuva koik</button>
            <br />
            <button onClick={view10PlusUsername}>Kuva koik kasutajad kelle username on 10 voi rohkem tahte</button>
            <br />
            <button onClick={findEmail}>Leia Lucio emaili index</button>
            <br />
            <button onClick={findFirstLetter}>Leia esimene C tahega algav nimi</button>
            <br />
            <button onClick={sortByLat}>Sorteeri lat jargi</button>
            <br />
            <button onClick={filterPositiveLng}>Filtreeri positiivne lng</button>
            <br />
            <button onClick={addIDs}>Leia koikide ID summa</button>
            <br />
            <button onClick={lisa000NumbriEtte}>Lisa 000 numbrite ette</button>
            <br />
            <button onClick={makeEmailArray}>Loo emailide massiiv</button>
            <br />
            <button onClick={replaceLetter}>Asenda cathphrase a taht e-ga</button>
            <br /><br />
            <div>Jarjekord:</div>
            {jarjekorrasKasutaja.map((element, index) =>
                <div key={index}>
                    <div>kasutaja: {element}</div>
                    <div>jarjekorranumber: {index}</div>
                </div>
            )}
            <br /><br />
            {kasutajad.map((element, index) => 
                <div key={element.id}>
                    <div><b>ID:</b> {element.id}</div>
                    <div><b>Name:</b> {element.name}</div>
                    <div><b>Username:</b> {element.username}</div>
                    <div><b>email:</b> {element.email}</div>
                    <span><b>Address:</b> {element.address.street}, </span>
                    <span>{element.address.suite}, </span>
                    <span>{element.address.city}, </span>
                    <span>{element.address.zipcode}, </span>
                    <span>{element.address.geo.lat}, </span>
                    <span>{element.address.geo.lng} </span>
                    <div><b>Phone:</b> {element.phone}</div>
                    <div><b>Website:</b> {element.website}</div>
                    <div><b>Company:</b> {element.company.name}</div>
                    <div>{element.company.catchPhrase}</div>
                    <div>{element.company.bs}</div>
                    <button onClick={() => addToCue(element.username, index)}>Lisa jarjekorda ja eemalda</button>
                    <br /> <br />
                </div> )}
        </div> );
}

export default Exercise_17;