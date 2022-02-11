import styles from "../styles/Landing.module.css";
import Image from "next/image";

const Landing: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      
      
      <div className={styles.icon}>
        <Image
          src="/Doctor 4.svg"
          width={1000}
          height={1000}
          alt="Future"
        />
      </div>
      <div>
        <h2 className={styles.tagline}>
          The only <em>implant database</em> radiologists and radiographers will
          ever need to find MRI-conditinals
        </h2>
      </div>
    </div>
  );
};

export default Landing;
