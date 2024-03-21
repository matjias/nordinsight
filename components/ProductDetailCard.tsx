import Image from 'next/image'
import styles from '../styles/ProductDetailCard.module.css'

interface ProductDetailCardProps {
  title: string
  text: string
  imgUrl?: string
  videoUrl?: string
}

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({
  title,
  text,
  imgUrl,
  videoUrl,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {imgUrl && <Image src={imgUrl} alt="icon" width={46} height={46} />}
        {videoUrl && (
          <video autoPlay loop style={{ width: '500px', height: '500px' }}>
            <source src={videoUrl} />
          </video>
        )}
        <h6>{title}</h6>
      </div>
      <hr />
      <p>{text}</p>
    </div>
  )
}

export default ProductDetailCard
