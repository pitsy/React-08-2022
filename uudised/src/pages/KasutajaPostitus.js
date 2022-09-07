import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

function KasutajaPostitus() {

    const [postitused, uuendaPostitused] = useState([]);
    const { kasutajaId } = useParams();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                const result = data.filter(element => element.userId === Number(kasutajaId));
                uuendaPostitused(result);
            })
    }, []);

    return ( 
        <div>
            {postitused.map((element, index) =>
                <div key={index}>
                    <div><i>Kasutaja id: </i>{element.userId}</div>
                    <div><u>Postituse id: </u>{element.id}</div>
                    <div><b>{element.title}</b></div>
                    <div>{element.body}</div>
                    <br />
                </div> )}
        </div> );
}

export default KasutajaPostitus;