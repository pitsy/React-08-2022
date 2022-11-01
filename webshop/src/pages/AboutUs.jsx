import styles from '../css/AboutUs.module.css';
import { useTranslation } from 'react-i18next';

function AboutUs() {

    const { t } = useTranslation();

    return ( 
        <div className={styles.display}>
            <div>
                <h2 className={styles.title}>{t('about-us.title')}</h2>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.</p> 
                <p className={styles.text}>
                    Tellus in metus vulputate eu scelerisque felis imperdiet. Vivamus arcu felis bibendum 
                    ut tristique et. At lectus urna duis convallis convallis tellus id interdum. Aenean 
                    pharetra magna ac placerat vestibulum lectus mauris ultrices. Nibh cras pulvinar 
                    mattis nunc. Amet mattis vulputate enim nulla aliquet porttitor lacus. Sed risus 
                    ultricies tristique nulla aliquet enim. Pellentesque diam volutpat commodo sed egestas 
                    egestas fringilla phasellus. Aliquet sagittis id consectetur purus ut faucibus pulvinar 
                    elementum. Aenean et tortor at risus viverra adipiscing at in tellus. Scelerisque viverra
                    mauris in aliquam sem fringilla ut morbi tincidunt. </p>
            </div>
            <img className={styles.image} src="https://picsum.photos/500/300" alt="" />
        </div> );
}

export default AboutUs;