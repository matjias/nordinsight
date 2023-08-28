import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.background}>
      <div className={styles['image-container']}>
        <Image
          src="/gradient_line.svg"
          alt="gradient-line"
          width="1084"
          height="5"
        />
      </div>

      <div className={styles.container}>
        <Image
          src="/LogoHvidFinal.png"
          alt="nordinsight-logo"
          width="140"
          height="30"
        />

        <div className={styles['footer-wrapper']}>
          <div className={styles['flexible-container']}>
            <p className={styles.info}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
              <span className={styles.link}>
                <br />
                <Link href="/">Get to know our Platform</Link>
              </span>
            </p>
            <p className={styles.copyright}>© 2022 NordInsight</p>
          </div>

          <div className={styles['flexible-container']}>
            <p className={styles.info}>CVR: 43001833</p>
            <p className={styles.info}>
              Store Kirkestræde 3, 3.tv <br />
              1073 København K{' '}
            </p>
          </div>

          <div className={styles.contact}>
            <div className={styles['linkedin-icon']}>
              <Link
                href="https://www.linkedin.com/company/nordinsight/"
                passHref
              >
                <Image
                  src="/linkedin.png"
                  width={1000}
                  height={1000}
                  alt="icon"
                />
              </Link>
            </div>
            <p className={styles.info}>
              Email us:{' '}
              <Link href="mailto:info@nordinsight.com" passHref>
                info@nordinsight.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
