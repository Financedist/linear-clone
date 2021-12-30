import React from "react";
import Logo from "../images/linear.png";

const Cta = () => {
  return (
    <section className="cta bg-dark text-light text-center">
      <div className="container py-5">
        <img
          src={Logo}
          alt={Logo}
          width="80px"
          style={{ borderRadius: "20px" }}
        />
        <div className="section-header py-4">
          <h1 className="">Get started with Linearr today</h1>
          <p className="text-secondary">
            Linearr keeps everyone aligned and working without friction.
            Engineers, designers, and peers - all collaborating in one tool
          </p>
        </div>
        <button className="btn btn-primary">Sign up for free</button>
      </div>
    </section>
  );
};

export default Cta;
