import React from "react";
import { MainButton } from "..";
import styles from "./.module.scss";
import { MdLocationPin } from "react-icons/md";
import { BsCalendarCheck, BsPeopleFill } from "react-icons/bs";

const DestinationForm = () => {
  const sources = [
    {
      id: "first__destination",
      label: "Destination",
      icon: <MdLocationPin />,
      options: [
        "USA",
        "Egypt",
        "Bail",
        "South Africa",
        "Turkey",
        "Dubai",
        "Istambul",
        "Australia",
        "Canada",
      ],
    },
    {
      id: "sec__destination",
      label: "Destination",
      icon: <BsCalendarCheck />,
      options: [
        "USA",
        "Egypt",
        "Bail",
        "South Africa",
        "Turkey",
        "Dubai",
        "Istambul",
        "Australia",
        "Canada",
      ],
    },
    {
      id: "type",
      label: "Type",
      icon: <BsPeopleFill />,
      options: [
        "Honeymoon",
        "Family",
        "Adventure",
        "Wild",
        "Nature",
        "Dubai",
        "Istambul",
        "Australia",
        "Canada",
      ],
    },
  ];

  return (
    <section className={`${styles.destination__section}`}>
      <form onSubmit={(e) => e.preventDefault()} className={styles.form__dest}>
        {sources.map((selectbox) => (
          <div className={styles.boxes} key={selectbox.id}>
            {selectbox.icon}
            <select
              id={selectbox.id}
              className={`form-select ${styles.select__box}`}
              aria-label="Default select example"
            >
              <option selected>{selectbox.label}</option>
              {selectbox.options.map((option, i) => (
                <option value={option} key={i}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <MainButton type="submit">Fine More</MainButton>
      </form>
    </section>
  );
};

export default DestinationForm;
