import React from "react";
import Interface1 from "../images/interface1.png";
import Interface2 from "../images/interface2.png";

const Interface = () => {
  return (
    <section className="interface py-5 bg-black">
      <div className="container d-md-flex align-items-start py-2 py-md-5">
        <div className="text py-0 py-md-5">
          <h2 className="mb-3">
            Interface,
            <br />
            streamlined.
          </h2>
          <p>
            Robust
            <span className="text-secondary px-2">
              Fast to navigate. Create issues in seconds. Add priorities, labels
              and estimates
            </span>
          </p>

          <p>
            List and board
            <span className="text-secondary px-2">
              See your issues in either list or board view
            </span>
          </p>
        </div>
        <div className="image-wrapper">
          <img
            className="intfc-img img-fluid one"
            src={Interface1}
            alt={Interface1}
          />
          <img
            className="intfc-img img-fluid two"
            src={Interface2}
            alt={Interface2}
          />
        </div>
      </div>
    </section>
  );
};

export default Interface;
