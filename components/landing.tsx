import styles from "../styles/Landing.module.css";
import Image from "next/image";
import AnimateOnScroll from "./utils/AnimateOnScroll";

const Landing: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
          <Image src="/Doctor 4.svg" width={1000} height={1000} alt="Future" />
      </div>
      <div>
        <AnimateOnScroll settings={{ transformY: 15 }}>
          <h2 className={styles.tagline}>
            The only <em>implant database</em> radiologists and radiographers
            will ever need to find MRI-conditinals
          </h2>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Landing;
