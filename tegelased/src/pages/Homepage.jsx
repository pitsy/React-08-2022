import { useState } from "react";

function Homepage() {

    const algTegelased = [
        {eesNimi: 'Mickey', pereNimi: 'Mouse', kodu: 'Disneyland', vanus: 900},
        {eesNimi: 'Minnie', pereNimi: 'Mouse', kodu: 'Disneyland', vanus: 1999},
        {eesNimi: 'Winnie', pereNimi: 'Pooh', kodu: 'Hundred Acre Wood', vanus: 3},
        {eesNimi: 'Roo', pereNimi: 'Kangaroo', kodu: 'Hundred Acre Wood', vanus: 1111},
        {eesNimi: 'Scooby', pereNimi: 'Doo', kodu: 'Crystal Cove', vanus: 777},
    ];

    // const tegelased = JSON.parse(localStorage.getItem('tegelased')) || [];
    const [tegelased, uuendaTegelasi] = useState(JSON.parse(localStorage.getItem('tegelased'))  || []);
    // tegelased.push(algTegelased);
    // uuendaTegelasi(tegelased.slice());
    // localStorage.setItem('tegelased', JSON.stringify(tegelased));

    const [valitudTegelane, uuendaValitut] = useState('');
    const [valitud, uuendaValituid] = useState([]);

    function kuvaNimi(tegelane) {
        //console.log(tegelane.eesNimi);
        uuendaValitut(tegelane.eesNimi);
        valitud.push(tegelane);
        uuendaValituid(valitud.slice());
    }

    function eemalda(index) {
        valitud.splice(index,1);
        uuendaValituid(valitud.slice());
    }

    return ( 
        <div>
            <h1>Tegelased</h1>
            {tegelased.map((tegelane, index) => 
            <div key={index}>
                <span>{tegelane.eesNimi} </span>
                <span>{tegelane.pereNimi}</span>
                <div>Lives in {tegelane.kodu}</div>
                <div>{tegelane.vanus} eons old</div>
                <button onClick={() => kuvaNimi(tegelane)}>Vali</button>
                <br /><br />
            </div>
            )}           
            {valitudTegelane !== '' && <div>Klikkisid tegelase {valitudTegelane} peal</div>}
            <br />
            {/* {valitudTegelane !== '' && <div>Olete valinud {valitud.length} tegelast</div>}
            <br /> */}
            {valitud.length === 0 ? 
            <div>Uhtegi tegelast pole valitud</div> : <div>Olete valinud {valitud.length} tegelast</div>}
            <br />
            <div>Valitud tegelased:</div>
            {valitud.map((tegelane, index) =>
            <div key={index}>
                <span>{tegelane.eesNimi} </span>
                <button onClick={() => eemalda(index)}>X</button>
            </div>
            )}
        </div> );
}

export default Homepage;