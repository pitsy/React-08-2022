import { useState } from 'react';

function Meist() {

    const [kontakt, n2itaKontakt] = useState('');
    const tootajad = [
        {nimi: 'Bill Gates', ala: 'Niisama', telefon: '+987654321'},
        {nimi: 'Arvo Part', ala: 'Klippide taustamuusika', telefon: '+313131313'},
        {nimi: 'Kelli Sildaru', ala: 'Spordiuudised', telefon: '+555555555'},
        {nimi: 'Valio Hollandi', ala: 'Toitlustus', telefon: '+654387654'},
        {nimi: 'Hapu Marmelaad', ala: 'Puugi Torje', telefon: '+123451234'},
        {nimi: 'Kassu Koer', ala: 'Turva', telefon: '+999999999'}
    ]

    return ( 
        <div>
            <div>See on meist leht</div> <br />
            <div>Me oleme toredad tegelased:</div> <br />
            <br />
            <div>{tootajad.map(tootaja => 
                <div>
                    <div>{tootaja.nimi}</div>
                    <div>{tootaja.ala}</div>
                    <button onClick={() => n2itaKontakt(tootaja.telefon)}>Vota uhendust</button>
                    <br /><br />
                </div>                
            )}</div>

            {/* <div>See on meist leht</div> <br />
            <div>Me oleme toredad vennad</div> <br />
            <button onClick={() => n2itaKontakt('+987654321')}>Vota uhendust</button>
            <div>Niisama on siin</div> <br />
            <div>Arvo Part</div>
            <button onClick={() => n2itaKontakt('+313131313')}>Vota uhendust</button>
            <div>Klippide taustamuusika</div><br /> */}
            { kontakt !== '' && <div>Tema kontakt: {kontakt}</div>}
        </div> 
    );
}

export default Meist;