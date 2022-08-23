import { useParams } from "react-router-dom";


function UksikToode() {
           // peab olema sama mis linkis .../toode/:nimi
    const {nimi} = useParams();
    const tooted = JSON.parse(localStorage.getItem('tooted')) || [];
    const otsitudToode = tooted.find(element => element.nimi === nimi);

    return ( 
        <div>
            { otsitudToode !== undefined && <div>
                <div>{otsitudToode.nimi}</div>
                <div>{otsitudToode.hind}</div>
                <div>{otsitudToode.aktiivsus + 0}</div>
            </div>}
            { otsitudToode === undefined && <div>Toodet ei leitud</div> }
        </div> );
}

export default UksikToode;