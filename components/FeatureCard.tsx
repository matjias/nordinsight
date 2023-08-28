import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/FeatureCard.module.css'

interface CardProps {
  title: string
  text: string
  layout: 'left' | 'right'
  imgUrl: string
}

const FeatureCard: React.FC<CardProps> = ({ title, text, layout, imgUrl }) => {
  return (
    <div
      className={`${styles.wrapper} ${
        layout === 'left' ? styles.wrapperLeft : styles.wrapperRight
      }`}
    >
      <div className={styles.img}>
        <Image src={imgUrl} alt="product-image" width={460} height={352} />
      </div>
      <div className={styles.info}>
        <h5>{title}</h5>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}

export default FeatureCard
