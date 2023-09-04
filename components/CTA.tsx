import styles from '../styles/CTA.module.css'
import Image from 'next/image'
import Newsletter from './newsletter'

const CTA: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <h4>Join Our Newsletter</h4>
        <p>
          At NordInsight, we understand the value of time, especially in the
          healthcare sector. That&#39;s why we&#39;ve optimized our platform for
          instant access and ease of use.
        </p>
        <Newsletter />
      </div>
    </div>
  )
}

export default CTA
