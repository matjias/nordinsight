import styles from '../../styles/CTA.module.css'
import Newsletter from '../newsletter'

const CTA: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h4>Join Our Newsletter</h4>
      <p>
        Join our newsletter to stay updated on MRI safety best practices and
        advancements in scanning patients with implants. You&apos;ll receive
        timely information on new features we introduce to enhance efficiency
        and safeguard patient well-being.
      </p>
      <Newsletter />
    </div>
  )
}

export default CTA
