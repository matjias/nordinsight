import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import Button, { ButtonType } from './general/Button'

const NavBar: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  const router = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const isActive = (href: string) => router.pathname === href ? styles.active : '';

  return (
    <nav className={`${styles.wrapper} ${menuIsOpen ? styles['menu-open'] : ''}`}>
      <div className={styles.logo}>
        <Image src="/LogohvidFinal.png" height={402} width={1950} alt="logo" />
      </div>
      <div onClick={toggleMenu} className={menuIsOpen ? styles.burger + ' ' + styles.burgeropen : styles.burger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={menuIsOpen ? styles.menuitems : styles.menuitems + ' ' + styles.hide}>
        <Link href={'/product'}>
          <a onClick={toggleMenu} className={`${styles.item} ${isActive('/product')}`}>
            Product
          </a>
        </Link>
        <Link href={'/company'}>
          <a onClick={toggleMenu} className={`${styles.item} ${isActive('/company')}`}>
            Company
          </a>
        </Link>
        <Link href={'/'}>
          <a onClick={toggleMenu} className={styles.item}>
            Community
          </a>
        </Link>
        <Button className={styles.button} small onClick={openModal} type={ButtonType.primary}>
          <span>Contact us</span>
        </Button>
      </div>
    </nav>
  )
}

export default NavBar;

