import styles from '../styles/Hero.module.css'
import Button, { ButtonType } from './general/Button'

interface HeroProps {
  heading: string;
  paragraph?: string;
  customStyle?: React.CSSProperties;
  
}

const Hero: React.FC<HeroProps> = ({ heading, paragraph, customStyle }) => {
  return (
    <div className={styles.background}>
        <div className={styles.wrapper}>
          <div style={customStyle} className={styles.hero}>
            <h5>NORDINSIGHT</h5>
            <h3>{heading}</h3>
            {paragraph && <p>{paragraph}</p>}
            <Button
            small
            onClick={() => {
              window.location.href = 'https://db.nordradiology.com'
            }}
            type={ButtonType.primary}
          >
            <span>Go to platform</span>
          </Button>
          </div>
        </div>
    </div>
  )
}

export default Hero
