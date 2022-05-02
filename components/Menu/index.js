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
    menu.current.classList.toggle(styles.show)
    setIsOpen(!isOpen);
  }

  const newPage = (path) => {
    router.push(path)
    if(isOpen) {
      setIsOpen(false)
      menu.current.classList.toggle(styles.show)
    }
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
          <button className={styles.menuText} onClick={() => newPage('/')}>
              <span>00</span> Home
          </button>
        </li>
        <li className={router.pathname === '/destination' ? styles.menuFocus : null}>
          <button className={styles.menuText} onClick={() => newPage('/destination')}>
              <span>01</span> Destination
          </button>
        </li>
        <li className={router.pathname === '/crew' ? styles.menuFocus : null}>
          <button className={styles.menuText} onClick={() => newPage('/crew')}>
              <span>02</span> Crew
          </button>
        </li>
        <li className={router.pathname === '/technology' ? styles.menuFocus : null}>
          <button className={styles.menuText} onClick={() => newPage('/technology')}>
              <span>03</span> Technology
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
