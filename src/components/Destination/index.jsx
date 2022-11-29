import React from "react";
import { MainButton, SectionTitle } from "../";
import styles from "./.module.scss";

const Destination = () => {
  const destinations = [
    {
      id: 1,
      img: "https://astrip-react.vercel.app/assets/images/bg/destnation11.png",
      title: "Wiesbaden Sea",
      toursNum: 40,
    },
    {
      id: 2,
      img: "https://astrip-react.vercel.app/assets/images/bg/destnation12.png",
      title: "California City",
      toursNum: 20,
    },
    {
      id: 3,
      img: "https://astrip-react.vercel.app/assets/images/bg/destnation13.png",
      title: "Grand Switzerland",
      toursNum: 50,
    },
    {
      id: 4,
      img: "https://astrip-react.vercel.app/assets/images/bg/destnation14.png",
      title: "Beauty of France",
      toursNum: 60,
    },
    {
      id: 5,
      img: "https://astrip-react.vercel.app/assets/images/bg/destnation15.png",
      title: "Beauty of France",
      toursNum: 40,
    },
  ];

  return (
    <section className={`${styles.destination__section} section__space`}>
      <SectionTitle title="Your Desired Destination" subtitle="DESTINATION" />
      <div
        className={`${styles.boxes__container} d-flex align-items-center justify-content-between`}
      >
        {destinations.map((dest) => (
          <div
            className={`${styles.dist__box} ${
              dest.id === 3 ? styles.dest__box__special : ""
            } position-relative`}
            key={dest.id}
          >
            <img
              src={dest.img}
              className={`position-absolute ${styles.dest_img}`}
              alt=""
            />
            <div className={styles.dest__destals}>
              <h4 className={styles.title}>{dest.title}</h4>
              <span className={styles.subtitle}>
                {dest.toursNum} Tours Place
              </span>
            </div>
          </div>
        ))}
      </div>
      <MainButton outline>All Destination</MainButton>
    </section>
  );
};

export default Destination;
