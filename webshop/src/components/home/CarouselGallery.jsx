import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

function CarouselGallery() {

    // const images = [
    //     {'image':"https://picsum.photos/id/237/700/400",'alt':'First slide','header':'First slide label','text':'Nulla vitae elit libero'},
    //     {'image':"https://picsum.photos/id/236/700/400",'alt':'Second slide','header':'Second slide label','text':'Lorem ipsum dolor sit amet'},
    //     {'image':"https://picsum.photos/id/235/700/400",'alt':'Third slide','header':'Third slide label','text':'Praesent commodo cursus magna'}
    // ]
    const imageDb = 'https://react0922-default-rtdb.europe-west1.firebasedatabase.app/pictures.json';
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        fetch(imageDb).then(response => response.json())
        .then(responseBody => {
            const picsFromDb = [];
            for (const key in responseBody) {
                picsFromDb.push(responseBody[key]);
            }
            setPictures(picsFromDb);
        })
    }, []);

    return ( 
        <Carousel>
            {pictures.map(element => <Carousel.Item key={element.url}>
                <img
                    src={element.url}
                    alt={element.alt}
                />
                <Carousel.Caption>
                <h3>{element.header}</h3>
                <p>{element.text}</p>
                </Carousel.Caption>
            </Carousel.Item>)}
        </Carousel>
     );
}

export default CarouselGallery;