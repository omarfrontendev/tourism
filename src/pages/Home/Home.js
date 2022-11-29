import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  DestinationForm,
  Hero,
  Socials,
  PopularTours,
  Deals,
  Destination,
  Plans,
  Wedgets,
  FeedbackAndAddNews,
  Blogs,
  Trusted,
  Instagram,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Socials />
      <div className="container">
        <DestinationForm />
        <PopularTours />
        <Deals />
        <Destination />
        <Plans />
        <Wedgets />
      </div>
      <FeedbackAndAddNews />
      <div className="container">
        <Blogs />
        <Trusted />
      </div>
      <Instagram />
      <Footer />
    </div>
  );
};

export default Home;
