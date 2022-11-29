import React from "react";
import SectionTitle from "../SectionTitle";
import styles from "./.module.scss";

const PopularTours = () => {
  const Tours = [
    {
      id: 1,
      icon: "https://astrip-react.vercel.app/assets/images/icons/adventure.svg",
      title: "Adventure",
    },
    {
      id: 2,
      icon: "https://astrip-react.vercel.app/assets/images/icons/city-tour.svg",
      title: "City Tour",
    },
    {
      id: 3,
      icon: "https://astrip-react.vercel.app/assets/images/icons/sheep.svg",
      title: "Cruises Tour",
    },
    {
      id: 4,
      icon: "https://astrip-react.vercel.app/assets/images/icons/wedding.svg",
      title: "Wedding",
    },
    {
      id: 5,
      icon: "https://astrip-react.vercel.app/assets/images/icons/sea-tour.svg",
      title: "Sea Tour",
    },
    {
      id: 6,
      icon: "https://astrip-react.vercel.app/assets/images/icons/travel.svg",
      title: "Travel",
    },
  ];

  return (
    <section className={`${styles.popular__section} section__space`}>
      <SectionTitle title="Our Popular Tours Type" subtitle="TRAVEL CATEGORY" />
      <div className={`${styles.tours__container}`}>
        {Tours.map((tour) => (
          <div key={tour.id} className={styles.tour__box}>
            <div className={styles.icon}>
              <img className={styles.tour__image} src={tour.icon} alt="" />
            </div>
            <h5 className={styles.tour__title}>{tour.title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularTours;
