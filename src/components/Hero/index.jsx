import React from "react";
import HeroText from "../HeroText";
import styles from "./.module.scss";

const Hero = () => {
  return (
    <div className={`${styles.hero__section} position-relative`}>
      <div className="container">
        <HeroText />
        <img
          src="https://astrip-react.vercel.app/assets/images/bg/banner-image2.png"
          alt=""
          className={`${styles.hero__img} ${styles.right__img} position-absolute`}
        />
        <img
          src="https://astrip-react.vercel.app/assets/images/bg/banner-image1.png"
          alt=""
          className={`${styles.hero__img} ${styles.left__img} position-absolute`}
        />
        <img
          src="https://astrip-react.vercel.app/assets/images/icons/banner-plane.svg"
          alt=""
          className={`${styles.hero__img} ${styles.plane} position-absolute`}
        />
      </div>
    </div>
  );
};

export default Hero;
