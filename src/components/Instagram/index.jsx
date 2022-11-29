import React from "react";
import { SectionTitle } from "../";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import styles from "./.module.scss";
import { FreeMode } from "swiper";

const Instagram = () => {
  const images = [
    "https://astrip-react.vercel.app/assets/images/bg/instagram4.png",
    "https://astrip-react.vercel.app/assets/images/bg/instagram5.png",
    "https://astrip-react.vercel.app/assets/images/bg/instagram1.png",
    "https://astrip-react.vercel.app/assets/images/bg/instagram2.png",
    "https://astrip-react.vercel.app/assets/images/bg/instagram3.png",
    "https://astrip-react.vercel.app/assets/images/bg/instagram4.png",
    "https://astrip-react.vercel.app/assets/images/bg/instagram5.png",
    "https://astrip-react.vercel.app/assets/images/bg/instagram1.png",
    "https://astrip-react.vercel.app/assets/images/bg/instagram2.png",
    "https://astrip-react.vercel.app/assets/images/bg/instagram3.png",
  ];

  return (
    <section>
      <div className="container">
        <SectionTitle title="Instagram Feed" />
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        freeMode={true}
        // loop={true}
        // loopFillGroupWithBlank={true}
        modules={[FreeMode]}
        // speed="10"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img className={styles.img} src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Instagram;
