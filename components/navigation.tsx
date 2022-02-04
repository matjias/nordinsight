import styles from '../styles/Navigation.module.css'
import Link from 'next/link';

const Navigation: React.FC = () => {
    return (<nav className={styles.wrapper}>
      <Link  href={'#mision'}><a className={styles.item}>Mission</a></Link>
          <Link  href={'#products'}><a className={styles.item}>Products</a></Link>
          <Link  href={'#team'}><a className={styles.item}>Team</a></Link>
          <Link  href={'#contact'}><a className={styles.item}>Contact</a></Link>
      </nav>)
}

export default Navigation;