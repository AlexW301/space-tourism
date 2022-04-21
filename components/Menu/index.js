/* eslint-disable @next/next/no-img-element */
import styles from "./Menu.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const Menu = () => {
  const router = useRouter();
  const menu = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    console.log(menu.current.classList)
    menu.current.classList.toggle(styles.show)
    setIsOpen(!isOpen);
  }

  return (
    <nav className={styles.navigation}>
      <Link href="/" passHref>
        <a className={styles.logo}>
          <img src="/assets/shared/logo.svg" alt="logo" />
        </a>
      </Link>
      <button onClick={showMenu} className={styles.menuBtn}><img src={isOpen ? "/assets/shared/icon-close.svg" : "/assets/shared/icon-hamburger.svg"} alt="menu icon"/></button>
      <ul ref={menu} className={styles.menu}>
        <div className={styles.blur}></div>
        <li className={router.pathname === '/' ? styles.menuFocus : null}>
          <Link href="/" passHref>
            <a className={styles.menuText}>
              <span>00</span> Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <a className={styles.menuText}>
              <span>01</span> Destination
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <a className={styles.menuText}>
              <span>02</span> Crew
            </a>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <a className={styles.menuText}>
              <span>03</span> Technology
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
