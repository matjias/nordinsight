import styles from "../styles/Landing.module.css";
import Image from "next/image";
import AnimateOnScroll from "./utils/AnimateOnScroll";
import Button, { ButtonType } from "./general/Button";
import dynamic from "next/dynamic";
import { useState } from "react";
import Newsletter from "./newsletter";

const Heart = dynamic(() => import("./Heart"), { ssr: false });

const Landing: React.FC = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);

  return (
    <div className={styles.wrapper}>
      <AnimateOnScroll settings={{ transformY: -10 }}>
        <div className={styles.heart}>
          {/* <Image src="/breath.png" width={1600} height={1600} alt="Future" /> */}
          <Heart />
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

        <Button
          onClick={() => {
            setShowNewsletter(true);
          }}
          type={ButtonType.primary}
        >
          <span>Go to database</span>
          <Image src="/right-arrow 4.svg" height={20} width={20} />
        </Button>

        <Newsletter />

        <AnimateOnScroll settings={{ transformY: 0 }}>
          <div className={styles.partners}>
            <h6>Partners: </h6>
            <div className={styles.logos}>
              <div className={styles.partnerlogo}>
                <Image
                  src="/innofound.svg"
                  width={300}
                  height={45}
                  alt="Future"
                />
              </div>
              <div className={styles.partnerlogo}>
                <Image src="/nhl.svg" width={260} height={80} alt="Future" />
              </div>
              <div className={styles.partnerlogo}>
                <Image src="/noh.png" width={640} height={183} alt="Future" />
              </div>
              <div className={styles.partnerlogo}>
                <Image
                  src="/healthineers.svg"
                  width={260}
                  height={80}
                  alt="Future"
                />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Landing;
