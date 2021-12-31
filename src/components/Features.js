import React from "react";

const Features = () => {
  return (
    <section className="features bg-dark text-light">
      <div className="container py-5">
        <div className="section-header">
          <h1>An experience you'd expect from a professional tool.</h1>
          <p className="text-secondary">
            Opinionated and designed for daily use.
          </p>
        </div>
        <div className="feature-cards py-4">
          <div className="rowe">
            <Card
              header={<i className="fa fa-2x fa-rocket" />}
              title="Built for speed"
              text="Synchronise in real-time accross all users. No spinners or waiting"
            />
            <Card
              header={<i className="fa fa-2x fa-keyboard" />}
              title="Keyboard first design"
              text="Optimised for efficiency with extensive keyboard shortcuts"
            />
            <Card
              header={<i className="fab fa-2x fa-uncharted" />}
              title="For software teams"
              text="Created by software people for software product teams"
            />
            <Card
              header={<i className="fas fa-2x fa-cog" />}
              title="Works offline"
              text="Access and make changes with or without internet"
            />
            <Card
              header={<i className="fas fa-2x fa-moon" />}
              title="Works Light and dark UI"
              text="We have multiple themes. Use light or dark, your choice."
            />
            <Card
              header={<i className="fas fa-2x fa-users" />}
              title="Works Light and dark UI"
              text="Have all your teams in one shared workspace."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ header, title, text }) => {
  return (
    <div className="feature-card bg-secondary p-4 p-md-5">
      <span className="text-primary">{header}</span>
      <p className="text-light mt-2" style={{ margin: 0 }}>
        {title}
      </p>
      <p className="text-secondary">{text}</p>
    </div>
  );
};

export default Features;
