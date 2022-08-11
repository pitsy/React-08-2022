import { useRef, useState } from "react";

function Seaded() {
    const aadressRef = useRef();
    const telefonRef = useRef();
    const [keel, uuendaKeel] = useState(localStorage.getItem('veebilehekeel') || 'est');

    const uuenda = () => {
        localStorage.setItem("aadress", aadressRef.current.value);
        localStorage.setItem("telefon", telefonRef.current.value);
    }

    // const muudaKeelEST = () => {
    //     uuendaKeel('est');
    //     localStorage.setItem('veebilehekeel','est');
    // }
    // const muudaKeelENG = () => {
    //     uuendaKeel('eng');
    //     localStorage.setItem('veebilehekeel','eng');
    // }
    // const muudaKeelRUS = () => {
    //     uuendaKeel('rus');
    //     localStorage.setItem('veebilehekeel','rus');
    // }

    const muudaKeel = (uusKeel) => {
        uuendaKeel(uusKeel);
        localStorage.setItem("veebilehekeel", uusKeel);
    }

    return ( 
        <div> 
            <label>Kontaktaadress</label> <br />
            <input ref={aadressRef} type="text" /> <br />
            <label>Kontakttelefon</label> <br />
            <input ref={telefonRef} type="text" /> <br />
            <button onClick={uuenda}>Uuenda lehe kotaktandmeid</button>
            <br /><br />
            <button onClick={() => muudaKeel('est')}>Muuda leht eesti keelseks</button>
            <button onClick={() => muudaKeel('eng')}>Muuda leht inglise keelseks</button>
            <button onClick={() => muudaKeel('rus')}>Muuda leht vene keelseks</button>
            { keel === 'est' && <div>Leht on eesti keelne</div>}
            { keel === 'eng' && <div>Leht on inglise keelne</div>}
            { keel === 'rus' && <div>Leht on vene keelne</div>}
        </div> 
    );
}

export default Seaded;