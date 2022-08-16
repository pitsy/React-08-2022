import {useState, useRef} from 'react';

function Poed() {

    const [poed, uuendaPoed] = useState(['Kristiine', 'Mustamae', 'Lasnamae', 'Oismae', 'Pohja-Tallinn', 'Telliskivi', 'Kesklinn']);
    const nimiRef = useRef(); // inputi kulge panemiseks

    const eemalda = (j2rjekorraNum) => {
        poed.splice(j2rjekorraNum,1);
        uuendaPoed(poed.slice())
        // splice on kustutamiseks, slice on koopia tegemiseks
    }

    const sorteeri = () => {
        poed.sort(); // sort muteerib
        uuendaPoed(poed.slice());
    }

    const lisa = () => {
        poed.push(nimiRef.current.value);
        uuendaPoed(poed.slice());
    }

    const filtreeri = () => {
        const result = poed.filter(element => element.length > 8);
        uuendaPoed(result);
    }

    const filtreeri2 = () => {
        const result = poed.filter(element => element.includes('mae')); // filter tagastab (return)
        uuendaPoed(result);
    }

    return ( 
        <div>
            <label>Uue poe nimi</label>
            <input ref={nimiRef} type="text" />
            <button onClick={lisa}>Lisa</button><br /><br />
            <button onClick={sorteeri}>Sorteeri tahestiku jarjekorras</button><br />
            <button onClick={filtreeri}>Jata alles koik ule 8 tahelised</button><br />
            <button onClick={filtreeri2}>Jata alles koik maed</button><br /><br />
            {poed.map((element,index) => 
                <div key={index}>
                    <span>{element}</span>
                    <button onClick={() => eemalda(index)}>Eemalda</button>
                </div>)}
        </div> 
    );
}

export default Poed;