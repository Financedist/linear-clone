import React from "react";
import Timeline from "../images/timeline.png";

const Roadmap = () => {
  return (
    <section className="roadmap py-5 bg-secondary">
      <div className="container d-md-flex align-items-start py-2 py-md-5">
        <div className="text py-0 py-md-5">
          <h2 className="mb-3 text-light" style={{ whiteSpace: "nowrap" }}>
            <span className="">Set direction</span>
            <span className="d-md-block d-inline px-2 px-md-0">
              with Roadmap
            </span>
          </h2>
          <p className="text-light">
            Focus on the big picture.
            <span className="text-secondary px-2">
              Set milestones to tie projects to larger company goals and
              motivate your team. View all company projects in one streamlined
              view and easily identify what needs your attention.
            </span>
          </p>
        </div>
        <div className="image-wrapper">
          <img className="intfc-img one" src={Timeline} alt={Timeline} />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
