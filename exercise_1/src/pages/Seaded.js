import { useState } from 'react';

function Seaded() {

    const [kujundus, muudaKujundus] = useState(localStorage.getItem('leheKujundus') || 'light-mode');

    const uuenda = (uusKujundus) => {
        muudaKujundus(uusKujundus);
        localStorage.setItem('leheKujundus', uusKujundus);
    }

    return ( 
        <div>
            <br />
            <button onClick={() => uuenda('dark-mode')}>Muuda kujundus tumedaks</button>
            <button onClick={() => uuenda('light-mode')}>Muuda kujundus heledaks</button> <br />
            {kujundus === 'light-mode' && <div>HELE LEHT</div>}
            {kujundus === 'dark-mode' && <div>TUME LEHT</div>}
        </div> 
    );
}

export default Seaded;