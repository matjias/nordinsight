import styles from "./Product.module.css";
import Image from "next/image";
import Button, { ButtonType } from "./general/Button";
import SideBanner from "./general/SideBanner";

const Product: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h3>
        MRI scan&#39;s come with a slew of risks. Together, we can reduce them.
      </h3>
      <div id="product" className={styles.info}>
        <div className={styles.screenshot}>
          <Image src="/screen.png" width={700} height={561} alt="screen" />
        </div>
        <div className={styles.description}>
          <h5>Implant Conditionals at hand</h5>
          <p>
            NordInsight gives you the power to search for any implant by name,
            UDI number or type, as well as find valuable information about
            safety, performance and clinical use. We are happy to answer any
            questions you might have - simply contact us anytime!
          </p>
          <Button onClick={() => {}} type={ButtonType.primary}>
            <span>Contact</span>
            <Image src="/send.png" height={20} width={20} alt="contact" />
          </Button>
        </div>
      </div>
      <SideBanner className={styles["browser-banner"]} side="left">
        <h5 className={styles["browser-title"]}>
          You can use every browser to access the database!
        </h5>
        <div className={styles.icons}>
          <div className={styles["browser-icon"]}>
            <Image src="/chrome.png" height={80} width={80} alt="contact" />
          </div>
          <div className={styles["browser-icon"]}>
            <Image src="/edge.png" height={80} width={80} alt="contact" />
          </div>
          <div className={styles["browser-icon"]}>
            <Image src="/safari.png" height={80} width={80} alt="contact" />
          </div>
          <div className={styles["browser-icon"]}>
            <Image src="/firefox.png" height={80} width={80} alt="contact" />
          </div>
        </div>
      </SideBanner>
      <div className={styles.steps}>
        <div className={styles.description}>
          <h5>Easy as 1, 2 3</h5>
          <p>
            We have taken it upon ourselves to make sure that our product can be
            used in every clinic, without any IT-security risks or worries about
            integration.
          </p>
          <p>It&#39;s as easy as a Google search..</p>
          <Button onClick={() => {}} type={ButtonType.primary}>
            <span>Contact</span>
            <Image src="/send.png" height={20} width={20} alt="contact" />
          </Button>
        </div>
        <SideBanner side="right">
          <ol>
            <li>Log-in using your favorite browser</li>
            <li>Search for MRI-conditional information</li>
            <li>Find relevant MRI-safety information</li>
          </ol>
        </SideBanner>
      </div>
      <div id="company" className={styles.why}>
        <h3>Why NordInsight?</h3>
        <div className={styles.points}>
          <div className={styles["point-element"]}>
            <Image src="/security.png" height={80} width={80} alt="contact" />
            <h5>IT-security on point</h5>
            <p>
              We follow industry leading IT-security standards that ensures
              quality data and safety in our database
            </p>
          </div>
          <div className={styles["point-element"]}>
            <Image
              src="/integration.png"
              height={80}
              width={130}
              alt="contact"
            />
            <h5>Integration of implant manufacturers</h5>
            <p>
              This integration ensures updated and validated data that makes you
              scan with confidence
            </p>
          </div>
          <div className={styles["point-element"]}>
            <Image src="/time.png" height={80} width={80} alt="contact" />
            <h5>Fast integration and learning</h5>
            <p>
              When the system is tailored to your needs, it&#39;s exceptionally
              easy to use. And thats the case with our database
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
