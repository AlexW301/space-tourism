import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.mainGrid}>
        <section className={styles.callToActionSection}>
          <h5>So, You want to travel to</h5>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <section className={styles.buttonSection}>
          <button onClick={() => router.push("/destination")}>explore</button>
        </section>
      </div>
    </div>
  );
}
