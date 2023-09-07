import styles from "../../styles/RiskGuarantee.module.css"
import Button, { ButtonType } from '../general/Button'

const RiskGuarantee: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <h3>Risk-Reversing Guarantee</h3>
        <p>
          &quot;Clear Insight Guarantee&quot;: If you don&apos;t find the
          implant data you need within the first month, we&apos;ll offer you a
          free additional month of access. If you&apos;re still not satisfied,
          receive a full refund.
        </p>
        <Button onClick={openModal} type={ButtonType.secondary}>
          Contact us
        </Button>
      </div>
    </div>
  )
}

export default RiskGuarantee
