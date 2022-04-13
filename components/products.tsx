import styles from '../styles/Products.module.css'
import ProductCard from './productCard';
import AnimateOnScroll from './utils/AnimateOnScroll';

const Products: React.FC = () => {

    const dbInfo = {
        iconSrc: '/server.png',
        title: 'Implant database',
        description: 'Our database is geared towards the needs of radiologists and radiographers. We are providing validated and updated MRI-conditionals information for a vast amount of medical devices. Search using UDI, serial-nr, name or manufacturers and you will find full safety protocols on all MRI-conditional information such as field strength, SAR, b1+rms, Spatial gradient, temperature rise, coils etc. You can even upload your hospital guidelines and documents so that you and your colleagues can find all information in one place. Radiologists can even pre-validate safety protocols so that radiographers can use them without asking permission first!',
        featureTitle: 'Search by',
        features: [
            'UDI',
            'Serial-no.',
            'Name',
            'Manufacturer',

        ]
    }
    const apiInfo = {
        iconSrc: '/api.png',
        title: 'MR-Scanner API',
        description: 'Our meticulous data structure enables a specific key: API. With our data, we can integrate directly to MRI machines, RIS, screening procedures, etc. This will allow for automation, increased safety, correct booking and faster scans.',
        featureTitle: 'Easily integrates with',
        features: [
            'MRI-Scanner',
            'RIS',
            'Screening procedures'
        ]
    }

    return (<div className={styles.wrapper}
    >
        <h3>Products</h3>
        <ProductCard info={dbInfo}/>
        <ProductCard info={apiInfo}/>
    </div>)
}

export default Products;