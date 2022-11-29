import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import "swiper/css";
import styles from "./.module.scss";

const FeedBack = () => {
  const stars = [1, 2, 3, 4, 5];

  const feedbacks = [
    {
      id: 1,
      review:
        "“This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas”!",
      name: "Johan Martin Sr",
      country: "South America.",
      img: "https://astrip-react.vercel.app/assets/images/bg/testi12.png",
    },
    {
      id: 2,
      review:
        "“This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas”!",
      name: "Johan Martin Sr",
      country: "South America.",
      img: "https://astrip-react.vercel.app/assets/images/bg/testi12.png",
    },
    {
      id: 3,
      review:
        "“This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas”!",
      name: "Johan Martin Sr",
      country: "South America.",
      img: "https://astrip-react.vercel.app/assets/images/bg/testi12.png",
    },
    {
      id: 4,
      review:
        "“This place is great! I had a very pleasant stay here. Great stuff and beautiful suites with a fabulous view etiam rhoncus maecenas”!",
      name: "Johan Martin Sr",
      country: "South America.",
      img: "https://astrip-react.vercel.app/assets/images/bg/testi12.png",
    },
  ];

  return (
    <div className={styles.feedback}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // className="mySwiper"
      >
        {feedbacks.map((review) => (
          <SwiperSlide key={review.id}>
            <div className={styles.review__details}>
              <div className={styles.review__rating}>
                <div className={styles.stars}>
                  {stars.map((star) => {
                    if (star === stars.length) {
                      return <BsStarHalf />;
                    } else {
                      return <BsStarFill />;
                    }
                  })}
                </div>
                <p className={styles.review}>{review.review}</p>
              </div>
              <div
                className={`${styles.person__details} d-flex align-items-center`}
              >
                <div className={styles.person__img}>
                  <img src={review.img} alt="" />
                </div>
                <div>
                  <h4 className={styles.name}>{review.name}</h4>
                  <span className={styles.country}>{review.country}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedBack;
