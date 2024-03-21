import styles from "../styles/Terms.module.css";
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
      <div className={styles.instructions}>
        <h4>Terms and Condition</h4>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <div className={styles.extra}>
      </div>
    </div>
  );
};
export default TestInfo;

export async function getStaticProps({ params }) {
  const docDirectory = path.join(process.cwd(), "docs/terms.md");

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
