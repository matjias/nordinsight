import styles from "../styles/ProductCard.module.css";
import Image from "next/image";

interface ProductInfo {
  iconSrc: string;
  title: string;
  description: string;
  keywords: string[];
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
      <ul className={styles.keywords}>
        {info.keywords.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCard;
