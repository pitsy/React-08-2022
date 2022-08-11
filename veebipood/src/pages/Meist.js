import { useState } from "react";

function Meist() {
    // const telefon = localStorage.getItem("telefon");
    // const aadress = localStorage.getItem("aadress");

    const [telefon, uuendaTelefoni] = useState("Mine hiirega ule, et naha telefoni");
    const [aadress, uuendaAadressi] = useState("Mine hiirega ule, et naha aadressi");

    const n2itaAadress = () => {
        uuendaAadressi(localStorage.getItem("aadress"));
    }

    const n2itaTelefon = () => {
        uuendaTelefoni(localStorage.getItem("telefon"));
    }

    return (
        <div>
            <span onMouseOver={n2itaAadress}>Meie aadress: {aadress}</span> <br />
            <span onMouseOver={n2itaTelefon}>Meie telefon: {telefon}</span>
        </div> 
    );
}

export default Meist;