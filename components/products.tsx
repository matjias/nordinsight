import styles from '../styles/Products.module.css'
import ProductCard from './productCard';

const Products: React.FC = () => {

    const dbInfo = {
        iconSrc: '/../public/server.png',
        title: 'Implant database',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque ultricies purus, a malesuada justo pellentesque in. Maecenas nec tortor vestibulum, condimentum mauris eu, feugiat est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse nulla purus, volutpat vel efficitur a, dignissim.',
        keywords: [
            'Fast',
            'Secure',
            'Updated',
            'User-friendly'
        ]
    }
    const apiInfo = {
        iconSrc: '/../public/api.png',
        title: 'MR-Scanner API',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque ultricies purus, a malesuada justo pellentesque in. Maecenas nec tortor vestibulum, condimentum mauris eu, feugiat est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse nulla purus, volutpat vel efficitur a, dignissim.',
        keywords: [
            'Fast',
            'Secure',
            'Updated',
            'User-friendly'
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