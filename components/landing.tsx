import styles from "../styles/Landing.module.css";
import Image from "next/image";
import Logo from '../public/Mascot.svg'

const Landing: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
      <div className={styles.logo}>
        <Logo className={styles.logosvg} />
        {/* <Image
          src="/../public/Mascot.svg"
          width={502}
          height={440}
          alt="NordInsight"
        /> */}
        {/* <div className={styles.ellipse}></div>
        <div className={styles.curve1}></div>
        <div className={styles.curve2}></div>
        <div className={styles.curve3}></div> */}
      </div>
      <h1>Nord<span className={styles.insight}>Insight</span></h1>
      </div>
      
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
