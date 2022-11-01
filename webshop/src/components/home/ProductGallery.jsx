import {Link} from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import styles from '../../css/Homepage.module.css';
import { useTranslation } from 'react-i18next';

function ProductGallery(props) {

    const { t } = useTranslation();

    return ( 
        <div>  
            <div className={styles.gridContainer}>
                {props.products.map((element) => 
                    <div key={element.id}>
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
                            <Button variant='dark' onClick={() => props.addToCart(element)}>{t('add.to.cart')}</Button>
                        </Card>
                    </div>)}    
            </div>
        </div> );   
}

export default ProductGallery;