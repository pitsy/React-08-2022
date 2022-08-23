import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MuudaToode() {

    const {tooteNimi} = useParams();
    const tooted = JSON.parse(localStorage.getItem('tooted')) || [];
    const otsitudToode = tooted.find(element => element.nimi === tooteNimi);
    const index = tooted.indexOf(otsitudToode);
    const nimiRef = useRef();
    const hindRef = useRef();
    const aktiivsusRef = useRef();
    const navigate = useNavigate();

    function muuda() {
        const uuendatudToode = {
            nimi: nimiRef.current.value,
            hind: hindRef.current.value,
            aktiivsus: aktiivsusRef.current.checked
        }
        tooted[index] = uuendatudToode;
        localStorage.setItem('tooted', JSON.stringify(tooted));
        navigate('/halda-tooteid');
    }

    return ( 
        <div>
            { otsitudToode !== undefined && <div>
                <label>Toote nimi </label>
                <input ref={nimiRef} defaultValue={otsitudToode.nimi} type="text" /> <br />
                <label>Toote hind </label>
                <input ref={hindRef} defaultValue={otsitudToode.hind} type="number" /> <br />
                <label>Toote aktiivsus </label>
                <input ref={aktiivsusRef} defaultChecked={otsitudToode.aktiivsus} type="checkbox" /> <br />
                <button onClick={muuda}>Muuda</button>
                
                {/* <div>{otsitudToode.nimi}</div>
                <div>{otsitudToode.hind}</div>
                <div>{otsitudToode.aktiivsus + 0}</div> */}
            </div> }
            { otsitudToode === undefined && <div>Toodet ei leitud</div> }
        </div> );
}

export default MuudaToode;