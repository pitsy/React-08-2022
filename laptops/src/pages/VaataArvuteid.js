
function VaataArvuteid() {

    const margid = JSON.parse(localStorage.getItem('margid')) || [];
    const mudelid = JSON.parse(localStorage.getItem('mudelid')) || [];
    const maksumused = JSON.parse(localStorage.getItem('maksumused')) || [];

    return ( 
        <div>
            <br />
            <div>{margid.map(mark => <div>{mark}</div>)}</div>
            <div>{mudelid.map(mudel => <div>{mudel}</div>)}</div>
            <div>{maksumused.map(maksumus => <div>{maksumus}</div>)}</div>
        </div>
     );
}

export default VaataArvuteid;