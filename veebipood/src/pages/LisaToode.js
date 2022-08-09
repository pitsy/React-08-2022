import { useRef, useState } from "react";

function LisaToode() {
    // numbri voi sona muutmiseks sisestuse jarel
    const [s6num, muudaS6num] = useState("LISA UUSE TOODE!");
    // laheb inputi sisse
    const nimiRef = useRef();

    const lisa = () => {
        if (nimiRef.current.value === "") {
            muudaS6num("Sisesta toote nimi!");
        } else {
            muudaS6num("Toode Lisatud: " + nimiRef.current.value);
        }        
    }

    return ( 
    <div>
        <div>{s6num}</div>
        <label>Toote nimi</label>
        <input ref={nimiRef} type="text" />
        <button onClick={lisa}>Lisa</button>
    </div> );
}

export default LisaToode;