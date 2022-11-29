import React from "react";
import { SectionTitle } from "../";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./.module.scss";
import MainButto from "../MainButton";
import { BsClock, BsStarFill } from "react-icons/bs";

const Plans = () => {
  const plans = [
    {
      id: 1,
      title: "This Year Amazing Bangkok",
      img: "https://astrip-react.vercel.app/assets/images/bg/best-plan23.png",
      price: "350",
      duration: "1 days 2 night",
      rating: "4.0",
      packages: [
        "Free Best Tour Guided",
        "Free Messages",
        "No Booking Charge",
        "Best Rate Gurantee",
      ],
    },
    {
      id: 2,
      title: "This Year Amazing Bangkok",
      img: "https://astrip-react.vercel.app/assets/images/bg/best-plan21.png",
      price: "350",
      duration: "1 days 2 night",
      rating: "4.0",
      packages: [
        "Free Best Tour Guided",
        "Free Messages",
        "No Booking Charge",
        "Best Rate Gurantee",
      ],
    },
    {
      id: 3,
      title: "This Year Amazing Bangkok",
      img: "https://astrip-react.vercel.app/assets/images/bg/best-plan22.png",
      price: "350",
      duration: "1 days 2 night",
      rating: "4.0",
      packages: [
        "Free Best Tour Guided",
        "Free Messages",
        "No Booking Charge",
        "Best Rate Gurantee",
      ],
    },
    {
      id: 4,
      title: "This Year Amazing Bangkok",
      img: "https://astrip-react.vercel.app/assets/images/bg/best-plan23.png",
      price: "350",
      duration: "1 days 2 night",
      rating: "4.0",
      packages: [
        "Free Best Tour Guided",
        "Free Messages",
        "No Booking Charge",
        "Best Rate Gurantee",
      ],
    },
    {
      id: 5,
      title: "This Year Amazing Bangkok",
      img: "https://astrip-react.vercel.app/assets/images/bg/best-plan21.png",
      price: "350",
      duration: "1 days 2 night",
      rating: "4.0",
      packages: [
        "Free Best Tour Guided",
        "Free Messages",
        "No Booking Charge",
        "Best Rate Gurantee",
      ],
    },
    {
      id: 6,
      title: "This Year Amazing Bangkok",
      img: "https://astrip-react.vercel.app/assets/images/bg/best-plan22.png",
      price: "350",
      duration: "1 days 2 night",
      rating: "4.0",
      packages: [
        "Free Best Tour Guided",
        "Free Messages",
        "No Booking Charge",
        "Best Rate Gurantee",
      ],
    },
  ];

  return (
    <section className={`${styles.plans__section} section__space`}>
      <SectionTitle
        title="Get The Best Plans For Your’s"
        subtitle="CHOOSE YOUR TOUR"
      />
      <div className={styles.plans__container}>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {plans.map((plan) => (
            <SwiperSlide key={plan.id}>
              <div className={styles.box}>
                <img src={plan.img} alt="" />
                <div className={styles.paln__details}>
                  <span className={styles.price}>From ${plan.price}</span>
                  <h3 className={styles.title}>{plan.title}</h3>
                  <div
                    className={`${styles.duration__rating} d-flex align-items-center justify-content-between`}
                  >
                    <div
                      className={`${styles.duration} d-flex align-items-center`}
                    >
                      <BsClock className={styles.icon} />
                      {plan.duration}
                    </div>
                    <div
                      className={`${styles.rating} d-flex align-items-center`}
                    >
                      <BsStarFill className={styles.icon} />
                      {plan.rating}
                    </div>
                  </div>
                  <h5 className={styles.package__title}>
                    Free Package Facility:
                  </h5>
                  <ul className={styles.package}>
                    {plan.packages.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                  <MainButto outline>Explorer Now</MainButto>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Plans;
