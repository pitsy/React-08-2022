import { Card, ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function CategoryFilter(props) {

    const { t } = useTranslation();

    return ( 
        <div>
            <Card border='light'>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <div className={props.actCategory ==='all' ? 'active-category' : 'inactive-category'} 
                        onClick={() => props.filterByCategory('all')}>
                            {t('filter.all-categories')}
                        </div>
                    </ListGroup.Item>
                    {props.categories.map(element => 
                        <ListGroup.Item key={element} 
                        className={props.actCategory === element ? 'active-category' : 'inactive-category'} 
                        onClick={() => props.filterByCategory(element)}>
                                {element}
                        </ListGroup.Item>)}
                </ListGroup>
            </Card>
        </div> );
}

export default CategoryFilter;