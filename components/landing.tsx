import styles from "../styles/Landing.module.css";
import Image from "next/image";
import AnimateOnScroll from "./utils/AnimateOnScroll";
import Button, { ButtonType } from "./general/Button";

const Landing: React.FC = () => {
  return (
    <div className={styles.wrapper}>
    <AnimateOnScroll settings={{ transformY: -10 }}>
      <div className={styles.heart}>
        <Image src="/image 37.png" width={1178} height={681} alt="Future" />
      </div>
        </AnimateOnScroll>
      <div className={styles.info}>
          <h2 className={styles.tagline}>
            An innovative implant database for <em>radiology</em>
          </h2>
          <p>
            De-risk patient safety undergoing MRI-scan with our advanced,
            browser-based implant database. Scan with confidence together with
            leading hospitals all over the world.
          </p>
          <Button onClick={() => {}} type={ButtonType.primary} ><span>Go to database</span><Image src='/right-arrow 4.svg' height={20} width={20}/></Button>
          <div className={styles.partners}>
            <h6>Partners: </h6>
            <div className={styles.partnerlogo}>
              <Image src="/inno.svg" width={300} height={34} alt="Future" />
            </div>
            <div className={styles.partnerlogo}>
              <Image src="/nhl.svg" width={260} height={80} alt="Future" />
            </div>
            <div className={styles.partnerlogo}>
              <Image src="/noh.png" width={640} height={183} alt="Future" />
            </div>
            <div className={styles.partnerlogo}>
              <Image src="/healthineers.svg" width={260} height={80} alt="Future" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Landing;
