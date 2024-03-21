import styles from '../../styles/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.lineContainer}>
        <Image
          src="/gradient_line.svg"
          alt="gradient-line"
          width="1084"
          height="5"
        />
      </div>

      <div className={styles.container}>
        <div className={styles.column}>
          <div className={styles.info}>
            <div className={styles.logoContainer}>
              <Image
                src="/LogoHvidFinal.png"
                alt="nordinsight-logo"
                width="140"
                height="30"
              />
            </div>
          </div>
          <p className={styles.info}>CVR: 43001833</p>
          <p className={styles.copyright}>© 2024 NordInsight</p>
        </div>

        <div className={styles.column}>
          {/* <p className={styles.info}>
            Store Kirkestræde 3, 3.tv <br />
            1073 København K
          </p> */}
        </div>

        <div className={styles.column}>
          <div>
            <p className={styles.info}>Contact us:</p>
            <div className={styles.highlightedText}>
              <Link href="mailto:info@nordinsight.com">
                info@nordinsight.com
              </Link>
            </div>
          </div>

          <div className={styles['linkedin-icon']}>
            <Link href="https://www.linkedin.com/company/nordinsight/" passHref>
              <Image
                src="/linkedin.png"
                width={30}
                height={30}
                alt="LinkedIn Icon"
              />
            </Link>
          </div>
        </div>

        {/* <div className={styles.column}>
          <div>
            <p className={styles.info}>Designed By</p>
            <p className={styles.highlightedText}>Emilia Clausse</p>
          </div>
        </div> */}
      </div>
    </footer>
  )
}

export default Footer
