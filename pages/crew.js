/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Crew.module.scss";

const Crew = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainGrid}>
        <h4 className={styles.subTitle}>
          <span>02</span> Meet Your Crew
        </h4>
        <div className={styles.content}>
            <h5 className={styles.title}>Commander</h5>
            <h2 className={styles.name}>Douglas Hurley</h2>
            <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
        </div>
        <ul className={styles.tabs}>
            <li>
                <button></button>
            </li>
            <li>
                <button></button>
            </li>
            <li>
                <button></button>
            </li>
            <li>
                <button></button>
            </li>
        </ul>
        <div className={styles.pictureContainer}>
            <img className={styles.picture} src="/assets/crew/image-douglas-hurley.png" alt="astronuat" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
