import { useRef, useState } from "react";

function LisaToode() {
    // vasakpoolne laheb HTMLi ---- s6num
    // parempoolne - seda kutsun valja nupuvajutusel et muuta vasakpoolset
    // numbri voi sona muutmiseks sisestuse jarel
    const [s6num, muudaS6num] = useState("LISA UUSE TOODE!");
    // laheb inputi sisse
    const nimiRef = useRef(); // laheb alati input kulge
    // const ingliseNimiRef = useRef(); // laheb alati input kulge

    const lisa = () => {
        if (nimiRef.current.value === "") {
            muudaS6num("Sisesta toote nimi!");
        } else {
            muudaS6num("Toode Lisatud: " + nimiRef.current.value);
            // localStorage.setItem("toode", nimiRef.current.value);
            // lehele minnes -> inspect -> application (chromis) -> local storage
            // localStorage.setItem("toodeENG", ingliseNimiRef.current.value);

            // 1 votan localStorageist vanad vaartused
            // 2 votan saadud vaartustest jutumargid maha
            // 3 lisan uhe juurde vaartustele
            // 4 panen jutumargid tagasi peale
            // 5 panen vaartuse localStorageisse tagasi

            let tooted = localStorage.getItem('tooted'); // saada katte koik varasemad vaartused 1) [midagi] 2) null
            tooted = JSON.parse(tooted) || [];
            tooted.push(nimiRef.current.value);
            tooted = JSON.stringify(tooted);
            localStorage.setItem('tooted', tooted); // vahetab vanad vaartused valja

            nimiRef.current.value = '';
        }        
    }

    return ( 
    <div>
        <div>{s6num}</div>
        <label>Toote nimi</label>
        <input ref={nimiRef} type="text" />
        {/* <label>Toote inglise nimi</label>
        <input ref={ingliseNimiRef} type="text" /> */}
        <button onClick={lisa}>Lisa</button>
    </div> );
}

export default LisaToode;

