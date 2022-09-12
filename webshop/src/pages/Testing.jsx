import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import styles from '../css/Testing.module.css';

function Testing() {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('https://react0922-default-rtdb.europe-west1.firebasedatabase.app/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data || []);
            });
    }, []);

    return ( 
        <div>
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {products.map((element, index) => 
                        <div key={element.id}>
                            <Col>
                                <Card className='mb-3' style={{ width: '16rem' }} bg='light' border='primary'>
                                        <Card.Img className={styles.img} src={element.image} alt="" />
                                        <Card.Body>
                                            <Card.Title className={styles.title}>{element.name}</Card.Title>
                                            <Card.Text>{element.price} $</Card.Text>
                                        </Card.Body>
                                    <Button>Lisa ostukorvi</Button>
                                </Card>
                            </Col>
                    </div>)}    
                </Row>
            </Container>
        </div> );
}

export default Testing;
