import { useState } from "react";

function Kontakt() {

    const [aadress, maaraAadress] = useState('Tallinn');
    const [telefon, maaraTelefon] = useState('5512345');
    const [email, maaraEmail] = useState('eyo@wassup.com');
    const [ingliseKeelne, muudaKeelInglise] = useState('ei');

    const muudaENG = () => {
        maaraAadress('Tallinn$');
        maaraTelefon('7512345');
        maaraEmail('@eyo@wassup.com');
        muudaKeelInglise('jah');
    }

    return ( 
        <div>
            <br /><br />
            <div>{ aadress }</div> 
            <div>{ telefon }</div>
            <div>{ email }</div>
            <br />
            <button onClick={muudaENG}>in English</button>
            <br />
            { ingliseKeelne === 'jah' && <div>Leht on inglise keelne</div> }
        </div>
    );
}

export default Kontakt;