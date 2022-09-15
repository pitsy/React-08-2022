import { Button } from "react-bootstrap";
import styles from '../../css/Homepage.module.css';
import { useTranslation } from 'react-i18next';

function SortButtons(props) {

    const { t } = useTranslation();
    // { t, i18n }

    function sortAZ() {
        props.fProducts.sort((a,b) => a.name.localeCompare(b.name));
        props.setFProducts(props.fProducts.slice());
        props.cPage(props.actPage);
    }

    function sortZA() {
        props.fProducts.sort((a,b) => b.name.localeCompare(a.name));
        props.setFProducts(props.fProducts.slice());
        props.cPage(props.actPage);
    }

    function sortPriceAsc() {
        props.fProducts.sort((a,b) => a.price - b.price);
        props.setFProducts(props.fProducts.slice());
        props.cPage(props.actPage);
    }

    function sortPriceDesc() {
        props.fProducts.sort((a,b) => b.price - a.price);
        props.setFProducts(props.fProducts.slice());
        props.cPage(props.actPage);
    }

    return ( 
        <div>
            <Button size='sm' variant='secondary' className={styles.sort} onClick={sortAZ}>{t('sort.az')}</Button>
            <Button size='sm' variant='secondary' className={styles.sort} onClick={sortZA}>{t('sort.za')}</Button>
            <Button size='sm' variant='secondary' className={styles.sort} onClick={sortPriceAsc}>{t('sort.price-asc')}</Button>
            <Button size='sm' variant='secondary' className={styles.sort} onClick={sortPriceDesc}>{t('sort.price-desc')}</Button>   
        </div>
     );
}

export default SortButtons;