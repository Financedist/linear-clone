import React from "react";
import Interface1 from "../images/cycles.jpg";

const Interface = () => {
  return (
    <section className="cycles py-5 bg-black">
      <div className="container d-md-flex align-items-start py-2 py-md-5">
        <div className="image-wrapper">
          <img
            className="intfc-img img-fluid one"
            src={Interface1}
            alt={Interface1}
          />
        </div>
        <div className="text mt-3 mt-md-0 py-3 py-md-5">
          <h2 className="mb-3">Build team momentum with Cycles</h2>
          <p>
            Velocity and estimates.
            <span className="text-secondary px-2">
              Track your team's workload and velocity.
            </span>
          </p>
          <p>
            Automated.
            <span className="text-secondary px-2">
              Cycles run on an automated schedule, so you can focus on your
              work.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Interface;
