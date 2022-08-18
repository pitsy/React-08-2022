
function Koduleht() {

    const tooted = JSON.parse(localStorage.getItem('tooted'))  || [];

    const lisaOstukorvi = (klikitudToode) => {
        console.log(klikitudToode);
        let ostukorv = localStorage.getItem('ostukorv');
        ostukorv = JSON.parse(ostukorv) || [];
        ostukorv.push(klikitudToode);
        ostukorv = JSON.stringify(ostukorv);
        localStorage.setItem('ostukorv', ostukorv);
    }

    return ( 
        <div>
            {tooted.map( (element,index) => 
                <div key={index}>
                    <span>{element}</span>
                    <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
                </div>)}
        </div> );
}

export default Koduleht;