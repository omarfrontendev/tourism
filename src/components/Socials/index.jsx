import React from "react";
import styles from "./.module.scss";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const Socials = () => {
  const links = [
    {
      id: 1,
      icon: <ImFacebook />,
      url: "#",
    },
    {
      id: 2,
      icon: <BsTwitter />,
      url: "#",
    },
    {
      id: 3,
      icon: <AiFillInstagram />,
      url: "#",
    },
    {
      id: 4,
      icon: <FaPinterest />,
      url: "#",
    },
  ];

  return (
    <ul className={`${styles.socials} position-absolute d-flex flex-column`}>
      {links.map((link) => (
        <li key={link.id} className={styles.link}>
          <a
            href={link.url}
            className="d-flex align-items-center justify-content-center"
            target="_blank"
            rel="noreferrer"
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
