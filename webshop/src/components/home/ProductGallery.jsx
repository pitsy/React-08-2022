import {Link} from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';
import styles from '../../css/Homepage.module.css';

function ProductGallery(props) {
    return ( 
        <div>  
            <Row xs={1} md={4} className="g-4">
                {props.products.map((element) => 
                    <div key={element.id}>
                        <Col>
                            <Card className='mb-3' style={{ width: '16rem' }} bg='light' border='dark'>
                                <Link className={styles.link} to={'/product/' + element.name}>
                                    <Card.Img className={styles.img} src={element.image} alt="" />
                                </Link>
                                <Card.Body>
                                    <Link className={styles.link} to={'/product/' + element.name}>
                                        <Card.Title className={styles.title}>{element.name}</Card.Title>
                                    </Link>
                                    <Card.Text>{element.price} $</Card.Text>
                                </Card.Body>
                                <Button variant='dark' onClick={() => props.addToCart(element)}>Lisa ostukorvi</Button>
                            </Card>
                        </Col>
                </div>)}    
            </Row>
        </div> );
}

export default ProductGallery;