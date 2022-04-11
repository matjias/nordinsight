import styles from "../styles/Navigation.module.css";
import Link from "next/link";
import Logo from "../public/Mascot.svg";
import { useState } from "react";

const Navigation: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <nav
      className={
        menuIsOpen ? styles.wrapper + " " + styles.bg2a : styles.wrapper
      }
    >
      <div
        onClick={toggleMenu}
        className={
          menuIsOpen ? styles.burger + " " + styles.burgeropen : styles.burger
        }
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={
          menuIsOpen ? styles.menuitems : styles.menuitems + " " + styles.hide
        }
      >
        <Link href={"#mision"}>
          <a onClick={toggleMenu} className={styles.item}>
            Mission
          </a>
        </Link>
        <Link href={"#products"}>
          <a onClick={toggleMenu} className={styles.item}>
            Products
          </a>
        </Link>
        <Link href={"#team"}>
          <a onClick={toggleMenu} className={styles.item}>
            Team
          </a>
        </Link>
        <Link href={"#contact"}>
          <a onClick={toggleMenu} className={styles.item}>
            Contact
          </a>
        </Link>
      </div>
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
        <h1>
          Nord<span className={styles.insight}>Insight</span>
        </h1>
      </div>
    </nav>
  );
};

export default Navigation;
