import { useRef, useState } from "react";

function Tagasiside() {

    const [tagasisided, maaraTagasisided] = useState(['Oli hea', 'Huvitav', 'Teistsugune', 'Igav']);
    const tagasisideRef = useRef();

    function kustuta(index) {
        tagasisided.splice(index,1);
        maaraTagasisided(tagasisided.slice());
    }

    function lisaUusTagasiside() {
        tagasisided.push(tagasisideRef.current.value);
        maaraTagasisided(tagasisided.slice());
    }

    return ( 
        <div>
            Tagasisided:
            {tagasisided.map((element, index) => 
            <div key={index}>
                <span>{element}</span>
                <button onClick={() => kustuta(index)}>X</button>
            </div>)}
            <br />
            <label>Lisa uus tagasiside:</label>
            <input ref={tagasisideRef} type="text" />
            <button onClick={() => lisaUusTagasiside()}>Sisesta</button>
        </div> );
}

export default Tagasiside;