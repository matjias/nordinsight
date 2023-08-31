import Image from 'next/image'
import styles from '../styles/Partners.module.css'

interface PartnersProps {
  heading: string
}

const Partners: React.FC<PartnersProps> = ({ heading }) => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <h4>
          {heading}
        </h4>
        <div className={styles.slider}>
          <div className={styles.slide_track}>
            <div className={styles.slider}>
              <Image
                src="/siemens.png"
                height={80}
                width={200}
                alt="siemens-logo"
              />
            </div>
            <div className={styles.slider}>
              <Image src="/innofounder.png" height={80} width={200} alt="" />
            </div>
            <div className={styles.slider}>
              <Image src="/nhl.png" height={80} width={200} alt="" />
            </div>
            <div className={styles.slider}>
              <Image src="/nordsjaelland.png" height={80} width={200} alt="" />
            </div>
            <div className={styles.slider}>
              <Image src="/siemens.png" height={80} width={200} alt="" />
            </div>
            <div className={styles.slider}>
              <Image src="/innofounder.png" height={80} width={200} alt="" />
            </div>
            <div className={styles.slider}>
              <Image src="/nhl.png" height={80} width={200} alt="" />
            </div>
            <div className={styles.slider}>
              <Image src="/nordsjaelland.png" height={80} width={200} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
