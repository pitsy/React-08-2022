import { useState } from "react";

function Aveleht() {

    const [kogus, uuendaKogus] = useState(30);
    const [tootenimi, uuendaTooteNimi] = useState("Telefon mudeliga " + localStorage.getItem("toode"));
    const [tooteKategooria, uuendaKategooria] = useState("Telefon");

    const v2henda = () => {
        uuendaKogus(kogus - 1);
    }
    const suurenda = () => {
        uuendaKogus(kogus + 1);
    }
    const change2english = () => {
        uuendaTooteNimi("Phone model " + localStorage.getItem("toodeENG"));
        uuendaKategooria("Telephone");
    }

    return ( 
    <div>
        <div>{tootenimi}</div>
        <div>{tooteKategooria}</div>
        <button onClick={change2english}>Muuda keelt</button> <br />
        <button onClick={v2henda}>vahenda</button>
        <div>{kogus}</div>
        <button onClick={suurenda}>suurenda</button>
    </div> );
}

export default Aveleht;