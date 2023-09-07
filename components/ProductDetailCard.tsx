import Image from 'next/image'
import styles from '../styles/ProductDetailCard.module.css'

interface ProductDetailCardProps {
  title: string
  text: string
  imgUrl: string
}

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({
  title,
  text,
  imgUrl,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Image src={imgUrl} alt="icon" width={46} height={46} />
        <h6>{title}</h6>
      </div>
      <hr />
      <p>{text}</p>
    </div>
  )
}

export default ProductDetailCard
