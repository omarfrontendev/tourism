import React from "react";
import styles from "./.module.scss";

const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className={styles.section__title}>
      <span className={styles.subtitle}>{subtitle}</span>
      <h2 className={styles.title}>{title}</h2>
      <img
        src="https://astrip-react.vercel.app/assets/images/icons/section-title-vector.svg"
        alt="title__logo"
        className={styles.logo}
      />
    </div>
  );
};

export default SectionTitle;
