import styles from "../styles/Navigation.module.css";
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image'

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
      <div className={styles.logo}>
        <Image src='/LogohvidFinal.png' height='619' width='3000' alt='logo' />
      </div>
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
        <Link href={"#product"}>
          <a onClick={toggleMenu} className={styles.item}>
            Product
          </a>
        </Link>
        <Link href={"#company"}>
          <a onClick={toggleMenu} className={styles.item}>
            Company
          </a>
        </Link>
        <Link href={"#team"}>
          <a onClick={toggleMenu} className={styles.item}>
            Team
          </a>
        </Link>
        <Link href={"#contact"}>
          <a onClick={toggleMenu} className={`${styles.item} ${styles.contact}`}>
            Contact us
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
