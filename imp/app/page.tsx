"use client";

import { useEffect } from "react";
import styles from "./page.module.scss";
import VanillaTilt from "vanilla-tilt";

const cardData = [
  { title: "Crusader Kings", href: "/ck3-list", image: "/images/ck.png", text: "Embark on a medieval journey of intrigue, romance, and conquest in a world shaped by dynasties." },
  { title: "Europa Universalis", href: "/eu-list", image: "/images/eu.png", text: "Master the art of diplomacy, trade, and warfare in a dynamic world spanning centuries." },
  { title: "Victoria", href: "#", image: "/images/vic3.png", text: "Dive into the complexities of the 19th century with deep economic and political systems." },
  { title: "Hearts of Iron", href: "#", image: "/images/hoi4.png", text: "Experience the intensity of World War II with strategic depth and historical accuracy." },
  { title: "Mega Campaign", href: "#", image: "/images/paradox.png", text: "Play the entire grand strategy timeline from 1066 to 1991 in one epic campaign!" },
];

export default function Page() {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(`.${styles["container__card"]}`)) as HTMLElement[];
    VanillaTilt.init(cards, {
      max: 3,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
      reverse: true,
    });
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* Header at the top */}
      <header>
        <h1 className={styles.title}>Welcome to Paradox MPs</h1>
      </header>
      {/* Main content in the center */}
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.cardsRow}>
            {cardData.map(card => (
              <div key={card.title} className={styles.cardWrapper}>
                <a
                  href={card.href}
                  className={styles["container__card"]}
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <div className={styles["container__card--content"]}>
                    <div className={styles.popup}>{card.text}</div>
                  </div>
                </a>
                <span className={styles.footer}>{card.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer at the bottom */}
      <footer className={styles.footer}>bla bla blub</footer>
    </div>
  );
}