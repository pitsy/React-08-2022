import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

function UksPostitus() {

    const {postituseId} = useParams();
    const [postitus, uuendaPostitus] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + postituseId)
            .then(res => res.json())
            .then(data => uuendaPostitus(data))
    }, [postituseId]);

    return ( 
        <div>
            <div><i>{postitus.userId}</i></div>
            <div><u>{postitus.id}</u></div>
            <div><b>{postitus.title}</b></div>
            <div>{postitus.body}</div>
        </div> );
}

export default UksPostitus;