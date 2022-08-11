import { useState } from "react";

function LisaArvuti() {
    const [message, setMessage] = useState("Lisa arvuti!");
    const [n2itaNuppu, uuendaN2itaNuppu] = useState(true);
    
    function addProduct() {
        setMessage("Arvuti lisatud!");
        uuendaN2itaNuppu(false);
    }
    
    return ( 
        <div>
            <div>Sonum: {message}</div>
            <label>Mark</label> <br />
            <input type="text" /> <br />
            <label>Mudel</label> <br />
            <input type="text" /> <br />
            <label>Maksumus</label> <br />
            <input type="number" /> <br />
            { n2itaNuppu === true && <button onClick={() => addProduct()}>Sisesta</button> }
        </div>
     );
}

export default LisaArvuti;