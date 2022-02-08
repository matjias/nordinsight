import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return(<footer className={styles.wrapper}>
        <div className={styles.info}>
            <p>CVR: 43001833</p>
            <p>Store Kirkestræde 3, 3.tv</p>
            <p>1073 København K</p>
        </div>
        <div className={styles.contact}>
            <div className={styles.linkedin} ><Link href='https://www.linkedin.com/company/nordinsight/' passHref><Image src='/linkedin.png' width={1000} height={1000} alt="icon" /></Link> </div>
            <p>Email us: <Link href='https://www.linkedin.com/company/nordinsight/' passHref>info@nordinsight.com</Link></p>
        </div>
    </footer>)
}

export default Footer;