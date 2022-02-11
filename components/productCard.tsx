import styles from "../styles/ProductCard.module.css";
import Image from "next/image";

interface ProductInfo {
  iconSrc: string;
  title: string;
  description: string;
  featureTitle: string;
  features: string[];
}

const ProductCard: React.FC<{ info: ProductInfo }> = ({ info }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <Image src={info.iconSrc} width={1000} height={1000} alt="icon" />
      </div>
      <div className={styles.info}>
        <h4>{info.title}</h4>
        <p>{info.description}</p>
      </div>
      <div>
      <h5>{info.featureTitle}</h5>
      <ul className={styles.features}>
        {info.features.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
      </div>
      
    </div>
  );
};

export default ProductCard;
