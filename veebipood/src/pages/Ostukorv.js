import { Link } from 'react-router-dom';

function Ostukorv() {
    return ( 
        <div>
            <div>Olen ostukorvi lehel</div>
            <Link to="/">
                <button>Tagasi avalehele</button>
            </Link>
        </div> );
}

export default Ostukorv;