import React from "react";
import "./Hero.css";
import HeroImage from "../images/hero-image.jpg";

const Hero = () => {
  return (
    <section className="hero bg-dark text-light">
      <div className="container py-5">
        <div className="main">
          <h1>The issue tracking tool you'll enjoy using</h1>
          <p className="my-3">
            Linearr helps streamline software projects, sprints, tasks, and bug
            tracking. It's built for high performance teams.
          </p>
          <button className="btn btn-primary">Sign up for free &raquo;</button>
        </div>
        <div className="image-showcase my-3 mx-3">
          <img className="img-fluid" src={HeroImage} alt={HeroImage} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
