import React from "react";
import { MainButton } from "../";
import styles from "./.module.scss";

const AddNewsForm = () => {
  return (
    <form
      className={`${styles.news__form} d-flex flex-column justify-content-center text-center`}
    >
      <h4>Join Newsletter</h4>
      <p>Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho</p>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <MainButton>Join Us</MainButton>
    </form>
  );
};

export default AddNewsForm;
