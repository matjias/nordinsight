import styles from '../styles/CTA.module.css'
import Image from 'next/image'
import Newsletter from './newsletter'

const CTA: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <h2>
          MRI scans come with a slew of risks. Together, we can reduce them.
        </h2>
        <Newsletter />
        <div>
          <Image
            src="/platform.png"
            alt="product-preview"
            width={1084}
            height={540}
          />
        </div>
      </div>
    </div>
  )
}

export default CTA
