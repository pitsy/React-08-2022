import { useRef } from "react";

function LisaTegelane() {

    const eesNimiRef = useRef();
    const pereNimiRef = useRef();
    const koduRef = useRef();
    const vanusRef = useRef();

    function lisaTegelane() {
        
        let tegelased = JSON.parse(localStorage.getItem('tegelased'))  || [];
        const uusTegelane = {
            eesNimi: eesNimiRef.current.value,
            pereNimi: pereNimiRef.current.value,
            kodu: koduRef.current.value,
            vanus: Number(vanusRef.current.value)
        }
        // console.log(uusTegelane);       
        tegelased.push(uusTegelane);
        tegelased = JSON.stringify(tegelased);
        localStorage.setItem('tegelased', tegelased);
    }

    return ( 
        <div>
            <br />
            <label>Tegelase eesnimi </label>
            <input ref={eesNimiRef} type="text" />
            <br />
            <label>Tegelase teine nimi </label>
            <input ref={pereNimiRef} type="text" />
            <br />
            <label>Tegelase kodu </label>
            <input ref={koduRef} type="text" />
            <br />
            <label>Tegelase vanus </label>
            <input ref={vanusRef} type="number" />
            <br />
            <button onClick={lisaTegelane}>Lisa tegelane</button>
        </div> );
}

export default LisaTegelane;