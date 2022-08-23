import {useState, useRef} from 'react';

function Poed() {

    const [poed, uuendaPoed] = useState([
        {nimi:'Kristiine', aeg:'9-22'},
        {nimi:'Mustamae', aeg:'9-22'},
        {nimi:'Lasnamae', aeg:'9-22'},
        {nimi:'Oismae', aeg:'9-22'},
        {nimi:'Pohja-Tallinn', aeg:'9-22'},
        {nimi:'Telliskivi', aeg:'9-22'},
        {nimi:'Kesklinn', aeg:'9-22'}]);

    const nimiRef = useRef(); // inputi kulge panemiseks
    const aegRef = useRef();

    const eemalda = (j2rjekorraNum) => {
        poed.splice(j2rjekorraNum,1);
        uuendaPoed(poed.slice());
        // splice on kustutamiseks, slice on koopia tegemiseks
    }

    const sorteeri = () => {
        poed.sort((a,b) => a.nimi.localeCompare(b.nimi)); // sort muteerib
        uuendaPoed(poed.slice());
    }

    const lisa = () => {
        const uusPood = {nimi: nimiRef.current.value, aeg: aegRef.current.value};
        poed.push(uusPood);
        uuendaPoed(poed.slice());
    }

    const filtreeri = () => {
        const result = poed.filter(element => element.nimi.length > 8);
        uuendaPoed(result);
    }

    const filtreeri2 = () => {
        const result = poed.filter(element => element.nimi.includes('mae')); // filter tagastab (return)
        uuendaPoed(result);
    }

    return ( 
        <div>
            <label>Uue poe nimi</label>
            <input ref={nimiRef} type="text" />
            <label>Uue poe lahtiolekuaeg</label>
            <input ref={aegRef} type="text" />
            <button onClick={lisa}>Lisa</button><br /><br />
            <button onClick={sorteeri}>Sorteeri tahestiku jarjekorras</button><br />
            <button onClick={filtreeri}>Jata alles koik ule 8 tahelised</button><br />
            <button onClick={filtreeri2}>Jata alles koik maed</button><br /><br />
            {poed.map((element,index) => 
                <div key={index}>
                    <span>{element.nimi} </span>
                    <span>({element.aeg}) </span>
                    <button onClick={() => eemalda(index)}>Eemalda</button>
                </div>)}
        </div> 
    );
}

export default Poed;