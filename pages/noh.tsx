import Image from "next/image";
import FaqElement from "../components/utils/FAQElement";
import ProgressBar from "../components/utils/ProgressBar";
import styles from "../styles/TestInfo.module.css";
import fs from "fs";
import { marked } from "marked";
import path from "path";
import matter from "gray-matter";

const TestInfo: React.FC<{
  content: string;
  faq: { q: string; a: string }[];
  start: string;
  end: string;
}> = ({ content, faq, start, end }) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
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
      <meta name="robots" content="noindex" />
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
        <h5 className={styles.phase}>Baselinemålinger</h5>
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
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>

      <div className={styles.faq}>
        <h4>FAQ</h4>
        <ul>
          {faq.map((el) => (
            <li key={el.q}>
              <FaqElement title={el.q} description={el.a} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.extra}>
        <h5>
          Kontakt NordInsight på mail: &nbsp;
          <a href="mailto:info@nordinsight.com"><u>info@nordinsight.com</u></a> eller
          vedhjælp af chatten her på siden.
        </h5>
        {/* <h5>
          <a href="#">
            <u>Download</u>
          </a>{" "}
          tilhørende materiale.
        </h5> */}
        <script
          src="//code.tidio.co/ay1gjvtsnztcwvotks3zsaj4ucti1bew.js"
          async
        ></script>
      </div>
    </div>
  );
};
export default TestInfo;

export async function getStaticProps({ params }) {
  const docDirectory = path.join(process.cwd(), "docs/instructions.md");

  const data = fs.readFileSync(docDirectory, "utf8");
  const doc = matter(data);
  const content = marked.parse(doc.content);

  return {
    props: {
      ...doc.data,
      content,
    },
  };
}
