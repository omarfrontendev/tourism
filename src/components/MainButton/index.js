import React from "react";
import styles from "./.module.scss";

const MainButto = ({ type, children, outline }) => {
  return (
    <button
      type={type || "button"}
      className={`${styles.main__button} ${outline ? styles.outline : ""}`}
    >
      <span className={styles.button__content}>{children}</span>
    </button>
  );
};

export default MainButto;
