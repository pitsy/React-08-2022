import { useRef, useState } from "react";

function Pildid() {

    // https://picsum.photos/seed/picsum/500/300
    const [pilt, uuendaPilt]= useState(localStorage.getItem('suur-pilt'));
    const [v2ikePildid, uuendaV2ikepilte] = useState(JSON.parse(localStorage.getItem('vaiksed-pildid')) || []);

    const piltRef = useRef();
    const v2ikePiltRef = useRef();

    function kustutaPilt() {
        uuendaPilt('');
        localStorage.setItem('suur-pilt', '')
    }

    function kustutaV2ikepilt(index) {
        v2ikePildid.splice(index,1);
        uuendaV2ikepilte(v2ikePildid.slice());
        localStorage.setItem('vaiksed-pildid', JSON.stringify(v2ikePildid));
    }

    // https://picsum.photos/id/256/500/300
    function asenda() {
        uuendaPilt(piltRef.current.value);
        localStorage.setItem('suur-pilt', piltRef.current.value);
        piltRef.current.value = '';
    }

    // https://picsum.photos/id/47/200/50
    function lisaV2ikepilt() {
        v2ikePildid.push(v2ikePiltRef.current.value);
        uuendaV2ikepilte(v2ikePildid.slice());
        localStorage.setItem('vaiksed-pildid', JSON.stringify(v2ikePildid));

        v2ikePiltRef.current.value = '';
    }

    function kustutaK6ik() {
        uuendaV2ikepilte([]);
        localStorage.setItem('vaiksed-pildid', JSON.stringify([]));
    }

    return ( 
        <div>
            <label>Suur pilt</label>
            <input ref={piltRef} type="text" />
            <button onClick={asenda}>Sisesta</button>
            <br />
            <img src={pilt} alt="" /> 
            { pilt !== '' && <button onClick={kustutaPilt}>X</button>}
            <br />
            <label>Vaike pilt</label>
            <input ref={v2ikePiltRef} type="text" />
            <button onClick={lisaV2ikepilt}>Sisesta</button>
            <div>Pilte on {v2ikePildid.length} tk</div>
            { v2ikePildid.length > 0 && <button onClick={kustutaK6ik}>Kustuta koik pildid</button>}
            {v2ikePildid.map((element, index) => 
            <div key={index}>
                <img src={element} alt="" />
                <button onClick={() => kustutaV2ikepilt(index)}>X</button>
                <br />
            </div>)}
        </div> );
}

export default Pildid;