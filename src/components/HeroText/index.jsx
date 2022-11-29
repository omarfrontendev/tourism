import React from "react";
import styles from "./.module.scss";
import { MainButton } from "../";

const HeroText = () => {
  return (
    <div className={`${styles.hero__text} text-center position-absolute`}>
      <div className={styles.hero__subtitle}>LET'S FEEL A YACHT TRIP</div>
      <h1 className={styles.hero__title}>
        The Best Way to Plan Your Trip Around The World
      </h1>
      <p className={styles.hero__desc}>
        Treat yourself with a journey to your inner self.
      </p>
      <MainButton>Discover More</MainButton>
    </div>
  );
};

export default HeroText;
