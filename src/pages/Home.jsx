import React from "react";
import {
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "../components";

const Home = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
};

export default Home;
