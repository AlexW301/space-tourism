/* eslint-disable @next/next/no-img-element */
import styles from "./Menu.module.scss";
import Link from "next/link";

const Menu = () => {
  return (
    <nav className={styles.navigation}>
      <Link href="/" passHref>
        <a>
          <img src="/assets/shared/logo.svg" alt="logo" />
        </a>
      </Link>
      <ul className={styles.menu}>
        <div className={styles.blur}></div>
        <li>
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
