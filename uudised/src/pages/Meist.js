import { useState } from 'react';

function Meist() {

    const [kontakt, n2itaKontakt] = useState('');

    return ( 
        <div>
            <div>See on meist leht</div> <br />
            <div>Me oleme toredad vennad</div> <br />
            <div>Bill Gates</div>
            <button onClick={() => n2itaKontakt('+987654321')}>Vota uhendust</button>
            <div>Niisama on siin</div> <br />
            <div>Arvo Part</div>
            <button onClick={() => n2itaKontakt('+313131313')}>Vota uhendust</button>
            <div>Klippide taustamuusika</div><br />
            { kontakt !== '' && <div>Tema kontakt: {kontakt}</div>}
        </div> 
    );
}

export default Meist;