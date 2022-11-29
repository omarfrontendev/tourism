import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./.module.scss";

const Trusted = () => {
  const travels = [
    {
      id: 1,
      img: "https://astrip-react.vercel.app/assets/images/icons/partner3.svg",
    },
    {
      id: 2,
      img: "https://astrip-react.vercel.app/assets/images/icons/partner4.svg",
    },
    {
      id: 3,
      img: "https://astrip-react.vercel.app/assets/images/icons/partner4.svg",
    },
    {
      id: 4,
      img: "https://astrip-react.vercel.app/assets/images/icons/partner4.svg",
    },
    {
      id: 5,
      img: "https://astrip-react.vercel.app/assets/images/icons/partner4.svg",
    },
    {
      id: 6,
      img: "https://astrip-react.vercel.app/assets/images/icons/partner2.svg",
    },
  ];

  return (
    <section className={`${styles.section} section__space`}>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
      >
        {travels.map((travel) => (
          <SwiperSlide key={travel.id}>
            <img className={styles.img} src={travel.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Trusted;
