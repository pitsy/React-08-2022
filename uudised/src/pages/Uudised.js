
function Uudised() {

    const uudised = JSON.parse(localStorage.getItem('uudised')) || [];

    return ( 
        <div>
            <div>See on uudiste leht</div> <br />
            {uudised.leght === 0 && <div>Hetkel uudiseid ei ole.</div>}
            <div>{uudised.map(uudis => <div>{uudis}</div>)}</div>
        </div> 
    );
}

export default Uudised;