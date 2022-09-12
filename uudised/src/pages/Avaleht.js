import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Avaleht() {

    const [postitused, uuendaPostitused] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => uuendaPostitused(data))
    }, []);

    return ( 
        <div>
            <div>See on avaleht</div>
            <br />
            {postitused.map((element,index) =>
                <div key={index}>
                    <div><i>Kasutaja id: </i>{element.userId}</div>
                    <div><u>Postituse id: </u>{element.id}</div>
                    <div><b>{element.title}</b></div>
                    <div>{element.body}</div>
                    <Link to={'kasutaja-postitus/' + element.userId}>
                        <button>Koik kasutaja {element.userId} postitused</button>
                    </Link>
                    <Link to={'vaata-postitus/' + element.id}>
                        <button>Vaata postitust</button>
                    </Link>
                    <br /><br />
                </div> )}
        </div> 
    );
}

export default Avaleht;