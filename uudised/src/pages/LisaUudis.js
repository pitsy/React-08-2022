import { useRef, useState } from 'react'

function LisaUudis() {

    const uudiseRef = useRef();
    const [sonum, uuendaSonum] = useState('');

    const lisaUusUudis = () => {
        let uudised = localStorage.getItem('uudised');
        uudised = JSON.parse(uudised) || [];
        uudised.push(uudiseRef.current.value);
        uudised = JSON.stringify(uudised);
        localStorage.setItem('uudised', uudised)
    }

    function kontrolli() {
        if (uudiseRef.current.value.charAt(0) === uudiseRef.current.value.charAt(0).toLowerCase() && 
            uudiseRef.current.value.length !== 0) {
            uuendaSonum('Sisestasid uudise vaikse tahega, palun paranda!');
        } else {
            uuendaSonum('');
        }
    }

    return ( 
        <div>
            <div>{sonum}</div>
            <label>Uudise nimi</label> <br />
            <input onChange={kontrolli} ref={uudiseRef} type="text" /> <br />
            <button onClick={() => lisaUusUudis()}>Lisa uudis</button>
        </div> );
}

export default LisaUudis;