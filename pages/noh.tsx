import Image from "next/image";
import FaqElement from "../components/utils/FAQElement";
import ProgressBar from "../components/utils/ProgressBar";
import styles from "../styles/TestInfo.module.css";

const TestInfo: React.FC = () => {
  const startDate = new Date("2022-04-08");
  const endDate = new Date("2022-04-12");
  const now = new Date();

  const interval = endDate.getTime() - startDate.getTime();
  const progress = now.getTime() - startDate.getTime();
  const per = (progress / interval) * 100;

  const dateToString = (date: Date) => {
    const month = date.toLocaleString("default", {
      day: "numeric",
      month: "long",
    });
    return month;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div>
          <Image
            src="/LogohvidFinal.png"
            alt="noh"
            layout="fill"
            objectFit="contain"
          />
        </div>
        &times;
        <div>
          <Image
            src="/logo_Nordsjaelland_png.png"
            alt="noh"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.info}>
        <ul>
          <li className={styles.current}>Fase 1</li>
          <li className={styles.next}>Fase 2</li>
        </ul>
        <h5 className={styles.phase}>Grundmålinger</h5>
        <ProgressBar
          progress={per}
          start={dateToString(startDate)}
          end={dateToString(endDate)}
        />
      </div>
      <div className={styles.instructions}>
        <h4>Formål</h4>
        <p>
          Formålet med fase 1 forløbet er at foretage grundlæggende målinger af
          tiden det tager at finde information om skanning af specifikke
          implantater, samt at vurdere trygheden af den information.{" "}
        </p>
        <h4>Instruktioner</h4>
        <ol>
          <li>
            Før du sætter dig ved computeren, enten i forbindelse med skanning
            eller visitering af patienter, tager du et clipboard og et
            tilhørende skema{" "}
          </li>
          <li>
            Før du sætter dig ved computeren, enten i forbindelse med skanning
            eller visitering af patienter, tager du et clipboard og et
            tilhørende skema{" "}
          </li>
          <li>
            Før du sætter dig ved computeren, enten i forbindelse med skanning
            eller visitering af patienter, tager du et clipboard og et
            tilhørende skema{" "}
          </li>
        </ol>
      </div>

      <div className={styles.faq}>
        <h4>FAQ</h4>
        <ul>
          <li>
            <FaqElement
              title="Er det nu?"
              description="fsdlkfjsd fsdkfmnsld f"
            />
          </li>
          <li>
            <FaqElement
              title="Er det nu?"
              description="fsdlkfjsd fsdkfmnsld f"
            />
          </li>
          <li>
            <FaqElement
              title="Er det nu?"
              description="fsdlkfjsd fsdkfmnsld f"
            />
          </li>
          <li>
            <FaqElement
              title="Er det nu?"
              description="fsdlkfjsd fsdkfmnsld f"
            />
          </li>
        </ul>
      </div>
      <div>
        <script src="//code.tidio.co/ay1gjvtsnztcwvotks3zsaj4ucti1bew.js" async></script>
      </div>
    </div>
  );
};

export default TestInfo;
