import React from "react";
import { SectionTitle } from "..";
import MainButto from "../MainButton";
import styles from "./.module.scss";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "The Social Art of Zaha Hadid, Architecture’s Engaging Presence",
      img: "https://astrip-react.vercel.app/assets/images/blog/blog-grid1.png",
      date: "February 8, 2022",
    },
    {
      id: 2,
      title: "Li River, China’s Orignial Postcard Landcaspe",
      img: "https://astrip-react.vercel.app/assets/images/blog/blog-grid2.png",
      date: "February 8, 2022",
    },
    {
      id: 3,
      title: "Jungles In Paris Vermont’s Rugged, Retro Ski Mountain",
      img: "https://astrip-react.vercel.app/assets/images/blog/blog-grid3.png",
      date: "February 8, 2022",
    },
  ];

  return (
    <section className={`${styles.section} section__space`}>
      <SectionTitle
        title="Get to Know Travel Experiences"
        subtitle="BLOG & NEWS"
      />
      <div className={`${styles.blogs__container} d-flex`}>
        {blogs.map((blog) => (
          <div className={styles.blog} key={blog.id}>
            <div className={`${styles.blog__image} position-relative`}>
              <img src={blog.img} alt="" />
              <span className={`${styles.blog__date} position-absolute`}>
                {blog.date}
              </span>
            </div>
            <h2 className={styles.blog__title}>{blog.title}</h2>
            <MainButto outline>Continue Reading</MainButto>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
