import Link from "next/link";
import styles from "../styles/Team.module.css";
import Profile from "./profile";

const Team: React.FC = () => {
  const mathiasInfo = {
    imageSrc: "/mathias.jpeg",
    name: "Mathias Sixten Pedersen",
    title: "CTO & Co-founder",
    description: "MSc. Computer Science",
    linkedInUrl: "https://linkedin.com/in/sixped",
  };
  const simonInfo = {
    imageSrc: "/simon.jpg",
    name: "Simon Elliott Thomassen",
    title: "CEO & Co-founder",
    description: "MSc. Health Informatics",
    linkedInUrl:
      "https://www.linkedin.com/in/simon-elliott-thomassen-884682a1/",
  };

  return (
    <div className={styles.wrapper}>
      <h3>Team</h3>
      <div className={styles.profiles}>
        <Profile info={simonInfo} />
        <Profile info={mathiasInfo} />
      </div>
      <div className={styles.advisors}>
        <h4>Advisory Board</h4>
        <div className={styles.advisor}>
          <Link href="https://www.linkedin.com/in/clausrehfeld"><h5>Claus Rehfeld</h5></Link>
          <em>Director at Nordic Healthcare Group</em>
        </div>
        <div className={styles.advisor}>
          <Link href="https://www.linkedin.com/in/jensroedandersen"><h5>Jens Heyn Roed Andersen</h5></Link>
          <em>Cybersecurity SME</em>
        </div>
        <div className={styles.advisor}>
          <Link href="https://www.linkedin.com/in/clausroemer"><h5>Claus Rømer Andersen</h5></Link>
          <em>Stategic Regulatory Navigation</em>
        </div>
      </div>
    </div>
  );
};
export default Team;
