import { useEffect, useState } from "react";
import { useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';

function MaintainPictures() {

    const urlRef = useRef();
    const altRef = useRef();
    const headerRef = useRef();
    const textRef = useRef();
    const [pictures, setPictures] = useState([]);
    const dbUrl = 'https://react0922-default-rtdb.europe-west1.firebasedatabase.app/pictures.json';

    useEffect(() => {
        fetch(dbUrl).then(response => response.json())
        .then(responseBody => {
            const picsFromDb = [];
            for (const key in responseBody) {
                picsFromDb.push(responseBody[key]);
            }
            setPictures(picsFromDb);
        })
    }, []);

    function deletePicture(pic) {
        const index = pictures.findIndex(element => element.url === pic.url);
        pictures.splice(index,1);
        setPictures(pictures.slice());
        
        fetch(dbUrl, {
            method: 'PUT',
            body: JSON.stringify(pictures),
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        toast.error('Picture deleted');
    }

    function addPicture() {
        const newPic = {
            url: urlRef.current.value,
            alt: altRef.current.value,
            header: headerRef.current.value,
            text: textRef.current.value,
        }

        fetch(dbUrl, {
            method: 'POST',
            body: JSON.stringify(newPic),
            'headers': {
                'Content-Type': 'application/json'
            }
        })

        pictures.push(newPic);
        setPictures(pictures.slice());
        urlRef.current.value = '';
        altRef.current.value = '';
        headerRef.current.value = '';
        textRef.current.value = '';
        toast.success('Picture added');
    }

    return ( 
        <div>  
            <label>Picture url</label> <br />
            <input ref={urlRef} type="text" /> <br />
            <label>Picture alt text</label> <br />
            <input ref={altRef} type="text" /> <br />
            <label>Picture header</label> <br />
            <input ref={headerRef} type="text" /> <br />
            <label>Picture description</label> <br />
            <input ref={textRef} type="text" /> <br /><br />
            <button onClick={() => addPicture()}>Add</button>
            <br /><br />
            {pictures.map(element =>
                <div>
                    <div>{element.header}</div>
                    <img src={element.url} alt={element.alt} />
                    <div>{element.text}</div>
                    <button onClick={() => deletePicture(element)}>X</button>
                    <br /><br />
                </div> )}
            <ToastContainer />
        </div> );
}

export default MaintainPictures;