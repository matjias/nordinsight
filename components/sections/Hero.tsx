import styles from '../../styles/Hero.module.css'
import Button, { ButtonType } from '../general/Button'

const Hero: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          {/* <h5>NORDINSIGHT</h5> */}

          <h2>The Future of MRI Safety</h2>
          <p>
            Navigating the labyrinth of MRI safety? Discover the way forward
            with NordInsight&apos;s platform and comprehensive library.
          </p>

          <Button
            small
            onClick={() => {
              window.location.href =
                'https://nordinsight.typeform.com/to/GGpj2Q3b'
            }}
            type={ButtonType.tertiary}
          >
            <span>Share your vision</span>
          </Button>
          {/* <Button
            small
            onClick={() => {
              window.location.href = 'https://db.nordradiology.com'
            }}
            type={ButtonType.primary}
          >
            <span>Go to platform</span>
          </Button> */}
        </div>

        <div className={styles.notice}>
          <h4>ECR 2025</h4>
          <p>
            Help build the future of MRI safety with NordInsight. Meet us at ECR
            2025 in Vienna.
          </p>
          <Button
            small
            onClick={() => {
              window.location.href =
                'https://calendly.com/selliott-23/nordinsight-implant-database'
            }}
            type={ButtonType.secondary}
          >
            <span>Schedule a demo</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
