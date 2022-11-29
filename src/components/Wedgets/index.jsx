import React from "react";
import { CustomerIcon, Guides, Placesicon, TourIcon } from "../icons";
import styles from "./.module.scss";

const Wedgets = () => {
  const wedgets = [
    {
      id: 1,
      icon: <TourIcon />,
      num: 400,
      title: "Awesome Tour",
    },
    {
      id: 2,
      icon: <Placesicon />,
      num: 250,
      title: "Stunning Places",
    },
    {
      id: 3,
      icon: <CustomerIcon />,
      num: 350,
      title: "Satisfied Customer",
    },
    {
      id: 4,
      icon: <Guides />,
      num: 500,
      title: "Travel Guides",
    },
  ];

  return (
    <div
      className={`${styles.wedgets} d-flex align-items-center justify-content-between`}
    >
      {wedgets.map((w) => (
        <div
          className={`${styles.single} align-items-center d-flex flex-column `}
        >
          {w.icon}
          <span>{w.num}+</span>
          <p>{w.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Wedgets;
