import { useState } from "react";

function Aveleht() {

    const [kogus, uuendaKogus] = useState(30);
    const [tootenimi, uuendaTooteNimi] = useState("Telefon mudeliga Samsung");
    const [tooteKategooria, uuendaKategooria] = useState("Telefon");

    const v2henda = () => {
        uuendaKogus(kogus - 1);
    }
    const suurenda = () => {
        uuendaKogus(kogus + 1);
    }
    const english = () => {
        uuendaTooteNimi("model samsung");
        uuendaKategooria("telephone");
    }

    return ( 
    <div>
        <div>{tootenimi}</div>
        <div>{tooteKategooria}</div>
        <button onClick={english}>Muuda keelt</button> <br />
        <button onClick={v2henda}>vahenda</button>
        <div>{kogus}</div>
        <button onClick={suurenda}>suurenda</button>
    </div> );
}

export default Aveleht;