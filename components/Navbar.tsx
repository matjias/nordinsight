import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Button, { ButtonType } from './general/Button'

const NavBar: React.FC<{ openModal: () => void }> = ({ openModal }) => {
  const router = useRouter()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const isActive = (href: string) =>
    router.pathname === href ? styles.active : ''

  return (
    <nav
      className={`${styles.wrapper} ${menuIsOpen ? styles['menu-open'] : ''}`}
    >
      <Link className={styles.logo} href="/">
        <Image src="/LogohvidFinal.png" height={402} width={1950} alt="logo" />
      </Link>
      <div
        onClick={toggleMenu}
        className={
          menuIsOpen ? styles.burger + ' ' + styles.burgeropen : styles.burger
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={
          menuIsOpen ? styles.menuitems : styles.menuitems + ' ' + styles.hide
        }
      >
        <div className={styles.navlinks}>
          <Link
            href={'/product'}
            onClick={toggleMenu}
            className={`${styles.item} ${isActive('/product')}`}
          >
            Product
          </Link>
          <Link
            href={'/company'}
            onClick={toggleMenu}
            className={`${styles.item} ${isActive('/company')}`}
          >
            Company
          </Link>
          <Link
            href={'/library'}
            onClick={toggleMenu}
            className={`${styles.item} ${isActive('/library')}`}
          >
            Library
          </Link>
        </div>
        <Button
          type={ButtonType.primary}
          onClick={() =>
            (window.location.href =
              'https://dev-nordradiology.herokuapp.com/sign-up/trial')
          }
        >
          Sign up
        </Button>
      </div>
    </nav>
  )
}

export default NavBar
