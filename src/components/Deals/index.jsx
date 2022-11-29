import React from "react";
import { SectionTitle } from "../";
import MainButto from "../MainButton";
import styles from "./.module.scss";
import { AiFillHeart } from "react-icons/ai";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Deals = () => {
  const deals = [
    {
      id: 1,
      img: "https://astrip-react.vercel.app/assets/images/bg/deal11.png",
      discount: 20,
      rating: 10,
      title: "Aegean Adventure",
      price: 290,
      old__price: 480,
    },
    {
      id: 2,
      img: "https://astrip-react.vercel.app/assets/images/bg/deal12.png",
      discount: 25,
      rating: 12,
      title: "Tours Ethiopia!",
      price: 499,
      old__price: 850,
    },
    {
      id: 3,
      img: "https://astrip-react.vercel.app/assets/images/bg/deal13.png",
      discount: 30,
      rating: 30,
      title: "Aegean Beach",
      price: 290,
      old__price: 480,
    },
    {
      id: 4,
      img: "https://astrip-react.vercel.app/assets/images/bg/deal14.png",
      discount: 20,
      rating: 10,
      title: "South America",
      price: 290,
      old__price: 480,
    },
  ];
  const stars = [1, 2, 3, 4, 5];

  const starsReview = (
    <ul className={`${styles.stars} d-flex align-items-center`}>
      {stars.map((star, i) => {
        if (i === stars.length - 1) {
          return (
            <li key={star}>
              <BsStarHalf />
            </li>
          );
        } else {
          return (
            <li key={star}>
              <BsStarFill />
            </li>
          );
        }
      })}
    </ul>
  );

  return (
    <section className={`${styles.deals__section} section__space`}>
      <SectionTitle title="Astrip Amazing Deals!" subtitle="DEALS & OFFER" />
      <div className={styles.deals__container}>
        {deals.map((deal) => (
          <div className={`${styles.box} position-relative`} key={deal.id}>
            <span className={`${styles.heart__box} position-absolute `}>
              <AiFillHeart className={styles.heart__icon} />
            </span>
            <div className={styles.deal__img}>
              <img src={deal.img} alt="" />
            </div>
            <div className={`${styles.deal__details} position-relative`}>
              <div className={`${styles.deal__discount} position-absolute`}>
                <div className={styles.discunt}>
                  <span>off</span>
                  {deal.discount}%
                </div>
              </div>
              <div
                className={`${styles.rating} d-flex align-items-center justify-content-between`}
              >
                {starsReview}
                <span>({deal.rating} Review)</span>
              </div>
              <h4 className={styles.deal__title}>{deal.title}</h4>
              <div className={styles.deal__price}>
                From ${deal.price}
                <span>/${deal.old__price}</span>
              </div>
              <MainButto outline>Explorer Now</MainButto>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deals;
