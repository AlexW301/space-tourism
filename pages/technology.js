/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Technology.module.scss";
import { useState, useRef, useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { gsap } from "gsap";

const Technology = () => {
  const { height, width } = useWindowDimensions();
  const [tab, setTab] = useState(0);
  const content = useRef(null);
  const picture = useRef(null);
  const technologyData = [
    {
      name: "Launch Vehicle",
      desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: width > 1233 ? "/assets/technology/image-launch-vehicle-portrait.jpg" : "/assets/technology/image-launch-vehicle-landscape.jpg",
    },
    {
      name: "Spaceport",
      desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      image: width > 1233 ? "/assets/technology/image-spaceport-portrait.jpg" : "/assets/technology/image-spaceport-landscape.jpg",
    },
    {
      name: "Space Capsule",
      desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: width > 1233 ? "/assets/technology/image-space-capsule-portrait.jpg" : "/assets/technology/image-space-capsule-landscape.jpg",
    }
  ];

  const newTab = async (tab) => {
    const tabContent = [content.current, picture.current];

    const tl = gsap.timeline({ defaults: { duration: 0.3 } });
    await tl.to(tabContent, { opacity: 0 });
    setTab(tab);
    tl.to(tabContent, { opacity: 1 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainGrid}>
        <h4 className={styles.subTitle}>
          <span>03</span> Space Launch 101
        </h4>
        <ul className={styles.tabs}>
          <li>
            <button onClick={() => newTab(0)} className={tab === 0 ? styles.activeTab : null}>1</button>
          </li>
          <li>
            <button onClick={() => newTab(1)} className={tab === 1 ? styles.activeTab : null}>2</button>
          </li>
          <li>
            <button onClick={() => newTab(2)} className={tab === 2 ? styles.activeTab : null}>3</button>
          </li>
        </ul>
        <section ref={content} className={styles.content}>
          <h5 className={styles.title}>THE TERMINOLOGY…</h5>
          <h2 className={styles.name}>{technologyData[tab].name}</h2>
          <p>
          {technologyData[tab].desc}
          </p>
        </section>
        <div ref={picture} className={styles.pictureContainer}>
          <img
            src={technologyData[tab].image}
            alt="picture of technology"
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
