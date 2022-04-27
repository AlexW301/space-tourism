/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Crew.module.scss";
import { useState, useRef } from "react";
import { gsap } from "gsap";

const Crew = () => {
  const [tab, setTab] = useState(0);
  const content = useRef(null);
  const picture = useRef(null);
  const crewData = [
    {
      title: 'Commander',
      name: 'Douglas Hurley',
      desc: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
      image: '/assets/crew/image-douglas-hurley.png'
    },
    {
      title: 'Mission Specialist',
      name: 'Mark Shuttleworth',
      desc: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
      image: '/assets/crew/image-mark-shuttleworth.png'
    },
    {
      title: 'Pilot',
      name: 'Victor Glover',
      desc: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
      image: '/assets/crew/image-victor-glover.png'
    },
    {
      title: 'Flight Engineer',
      name: 'Anousheh Ansari',
      desc: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
      image: '/assets/crew/image-anousheh-ansari.png'
    }
  ]

  const newTab = async (tab) => {
    const tabContent = [
      content.current,
      picture.current
    ]
    const tl = gsap.timeline({defaults: { duration: 0.3 }})
    await tl.to(tabContent, {opacity: 0})
    setTab(tab)
    tl.to(tabContent, {opacity: 1})
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainGrid}>
        <h4 className={styles.subTitle}>
          <span>02</span> Meet Your Crew
        </h4>
        <div ref={content} className={styles.content}>
            <h5 className={styles.title}>{crewData[tab].title}</h5>
            <h2 className={styles.name}>{crewData[tab].name}</h2>
            <p>{crewData[tab].desc}</p>
        </div>
        <ul className={styles.tabs}>
            <li>
                <button onClick={() => {newTab(0)}} style={tab === 0 ? {background: 'white'} : null}></button>
            </li>
            <li>
                <button onClick={() => {newTab(1)}} style={tab === 1 ? {background: 'white'} : null}></button>
            </li>
            <li>
                <button onClick={() => {newTab(2)}} style={tab === 2 ? {background: 'white'} : null}></button>
            </li>
            <li>
                <button onClick={() => {newTab(3)}} style={tab === 3 ? {background: 'white'} : null}></button>
            </li>
        </ul>
        <div ref={picture} className={styles.pictureContainer}>
            <img className={styles.picture} src={crewData[tab].image} alt="astronuat" />
        </div>
      </div>
    </div>
  );
};

export default Crew;
