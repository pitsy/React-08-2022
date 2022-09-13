import { Carousel } from "react-bootstrap";

function CarouselGallery() {

    const images = [
        {'image':"https://picsum.photos/id/237/500/400",'alt':'First slide','header':'First slide label','text':'Nulla vitae elit libero'},
        {'image':"https://picsum.photos/id/236/500/400",'alt':'Second slide','header':'Second slide label','text':'Lorem ipsum dolor sit amet'},
        {'image':"https://picsum.photos/id/235/500/400",'alt':'Third slide','header':'Third slide label','text':'Praesent commodo cursus magna'}
    ]

    return ( 
        <Carousel>
            {images.map(element => <Carousel.Item key={element.image}>
                <img
                    src={element.image}
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