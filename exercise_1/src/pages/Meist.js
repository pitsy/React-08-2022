import { useState } from "react";

function Meist() {

    const [message, maaraMessage] = useState('Vali moni tegevus');

    const muudaSonum = (uusSonum) => {
        maaraMessage(uusSonum);
    }

    return ( 
        <div>
            <br />
            <div>{ message }</div> <br />
            <button onClick={() => muudaSonum('Selleks saada meile e-mail jobs@html-css.com')}>Kandideeri toole</button>
            <button onClick={() => muudaSonum('Meil on 10 tootajat, kelle info ilmub veebilehele lahiajal')}>Vaata meie tootajaid</button>
            <button onClick={() => muudaSonum('Uhenduse votmiseks mine lehele Kontakt')}>Vota meiega uhendust</button>
        </div> );
}

export default Meist;