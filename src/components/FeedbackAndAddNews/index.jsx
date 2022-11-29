import React from "react";
import { FeedBack, AddNewsForm } from "../";
import styles from "./.module.scss";

const FeedbackAndAddNews = () => {
  return (
    <section className={`${styles.section} section__space`}>
      <div className={styles.feedback}>
        <img
          src="https://astrip-react.vercel.app/assets/images/icons/testi-quote.svg"
          alt=""
        />
        <FeedBack />
      </div>
      <div className={styles.add__news}>
        <AddNewsForm />
      </div>
    </section>
  );
};

export default FeedbackAndAddNews;
