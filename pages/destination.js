/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Destination.module.scss";
import Link from "next/link";
import { useState, useRef } from "react";
import { gsap } from "gsap";

const Destination = () => {
  // VARIABLES
  let planetData = [];
  const [tab, setTab] = useState(0);
  let mainGrid = useRef(null);

  planetData = [
    {
      name: "Moon",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      time: "3 Days",
      image: "/assets/destination/image-moon.png",
    },
    {
      name: "Mars",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. km",
      time: "9 months",
      image: "/assets/destination/image-mars.png",
    },
    {
      name: "Europa",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. km",
      time: "3 years",
      image: "/assets/destination/image-europa.png",
    },
    {
      name: "Titan",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. km",
      time: "7 years",
      image: "/assets/destination/image-titan.png",
    },
  ];

  // FUNCTIONS

  const newTab = (tab) => {
    setTab(tab);
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(mainGrid.current, { opacity: 0 })
    tl.to(mainGrid.current, { opacity: 1 }, "+=.3")
  }

  // COMPONENT
  return (
    <div className={styles.container}>
      <div ref={mainGrid} className={styles.mainGrid}>
        <h4 className={styles.subTitle}>
          <span>01</span> Pick Your Destination
        </h4>
        <div className={styles.imageContainer}>
        <img
          className={styles.planetImg}
          src={planetData[tab].image}
          alt="image of destination"
        />
        </div>
        <section className={styles.content}>
          <nav className={styles.tabNav}>
            <ul>
              <li onClick={() => newTab(0)}>
                <button className={tab === 0 ? styles.activeTab : null}>
                  <h6>Moon</h6>
                </button>
              </li>
              <li onClick={() => newTab(1)}>
                <button className={tab === 1 ? styles.activeTab : null}>
                  <h6>Mars</h6>
                </button>
              </li>
              <li onClick={() => newTab(2)}>
                <button className={tab === 2 ? styles.activeTab : null}>
                  <h6>Europa</h6>
                </button>
              </li>
              <li onClick={() => newTab(3)}>
                <button className={tab === 3 ? styles.activeTab : null}>
                  <h6>Titan</h6>
                </button>
              </li>
            </ul>
          </nav>
          <h2 className={styles.name}>{planetData[tab].name}</h2>
          <p className={styles.description}>{planetData[tab].description}</p>
          <div className={styles.divider}></div>
          <h5 className={styles.distance}>
            <span>Avg. Distance</span>
            <br></br>
            {planetData[tab].distance}
          </h5>
          <h5 className={styles.time}>
            <span>Est. Travel Time</span>
            <br></br>
            {planetData[tab].time}
          </h5>
        </section>
      </div>
    </div>
  );
};

export default Destination;
