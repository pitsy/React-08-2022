import { useState } from 'react';

function Kontakt() {

    const [n2itaKristiine, muudaKristiine] = useState(false);
    const [n2itaUlemiste, muudaUlemiste] = useState(false);
    const [n2itaLasnamae, muudaLasnamae] = useState(false);

    return ( 
        <div>
            <div>See on kontaktide leht</div>
            <div>Vota meiega uhendust:</div> <br />
            <div onClick={() => muudaLasnamae(!n2itaLasnamae)}>Lasnamae Centrum</div>
            {n2itaLasnamae && <div>+37259999999</div>}
            <div>Pae 999</div><br />
            <div onClick={() => muudaKristiine(!n2itaKristiine)}>Kristiine keskus</div>
            {n2itaKristiine && <div>+69577777777</div>}
            <div>Endla 455</div><br />
            <div onClick={() => muudaUlemiste(!n2itaUlemiste)}>Ulemiste keskus</div>
            {n2itaUlemiste && <div>+37156439812</div>}
            <div>Suuri-Soyamae 4</div>
        </div> 
    );
}

export default Kontakt;