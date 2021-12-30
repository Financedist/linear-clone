import React from "react";
import CommandMenu from "../images/command-menu.gif";

const CommandLine = () => {
  return (
    <section className="command-line bg-dark py-5">
      <div className="container py-5">
        <div className="section-header text-center">
          <div className="d-flex align-items-center mb-3 justify-content-center buttons">
            <div
              className="d-flex align-items-center justify-content-center text-white mx-2"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "var(--bg-off-black)",
                borderRadius: "5px",
              }}
            >
              Ctrl
            </div>
            <div
              className="d-flex align-items-center justify-content-center text-white mx-2"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "var(--bg-off-black)",
                borderRadius: "5px",
              }}
            >
              +
            </div>
            <div
              className="d-flex align-items-center justify-content-center text-white mx-2"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "var(--bg-off-black)",
                borderRadius: "5px",
              }}
            >
              K
            </div>
          </div>
          <h1 className="text-light">Meet your command line</h1>
          <p className="text-secondary">
            Any action can be accessed and completed in seconds with the command
            menu
          </p>
        </div>
        <div className="image-wrapper d-flex justify-content-center align-items-center">
          <img src={CommandMenu} alt={CommandMenu} width="90%" />
        </div>
      </div>
    </section>
  );
};

export default CommandLine;
