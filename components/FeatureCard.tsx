import Image from 'next/image'
import styles from '../styles/FeatureCard.module.css'
import Button, { ButtonType } from './general/Button'

interface CardProps {
  title?: string
  subtitle?: string
  text: string
  layout: 'left' | 'right'
  imgUrl: string
  buttonTitle?: string
  onClickFunction?: () => void
}

const FeatureCard: React.FC<CardProps> = ({
  title,
  subtitle,
  text,
  layout,
  imgUrl,
  buttonTitle,
  onClickFunction,
}) => {
  return (
    <div
      className={`${styles.wrapper} ${!title ? styles.large : ''} ${
        layout === 'left' ? styles.wrapperLeft : styles.wrapperRight
      }`}
    >
      <div className={styles.img}>
        <Image
          src={imgUrl}
          alt="product-image"
          layout="responsive"
          objectFit="cover"
          width={460}
          height={352}
        />
      </div>
      <div className={styles.info}>
        {title && <h4>{title}</h4>}
        {subtitle && <h5>{subtitle}</h5>}
        <p className={styles.text}>{text}</p>
        {buttonTitle && onClickFunction && (
          <Button type={ButtonType.secondary} onClick={onClickFunction}>
            {buttonTitle}
          </Button>
        )}
      </div>
    </div>
  )
}

export default FeatureCard
