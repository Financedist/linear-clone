import React from "react";
import Github from "../images/github.png";
import Gitlab from "../images/gitlab.png";
import Zapier from "../images/zapier.png";
import Figma from "../images/figma-logo.png";
import FigmaImg from "../images/figma.png";
import Slack from "../images/slack.png";
import Slack2 from "../images/slack2.png";
import Sentry from "../images/sentry.png";
import Workflow from "../images/workflow.png";

const Integrate = () => {
  return (
    <section className="integrate bg-dark py-5">
      <div className="container">
        <div className="section-head">
          <h1 className="text-light fw-bold">Integrate with your tools</h1>
          <p className="text-secondary">
            Linear keeps everone aligned and working more efficiently.
            Engineers, designers, and peers - all collaborating in one tool.
          </p>
        </div>
        <div className="integrate-cards mt-4">
          <CardGroup
            type="one"
            images={
              <>
                <img className="px-3" src={Github} alt={Github} />
                <img
                  className="px-3"
                  src={Gitlab}
                  alt={Gitlab}
                  style={{
                    borderRight: "1px solid grey",
                    borderLeft: "1px solid grey",
                  }}
                />
                <img className="px-3" src={Sentry} alt={Sentry} width="70px" />
              </>
            }
            title="Automate tracking with Github, Gitlab and Sentry"
            text="Linear integrates with your pull requests and Sentry issues."
            rightImg={
              <img src={Workflow} alt={Workflow} className="img-fluid" />
            }
            bg="blue"
          />
          <CardGroup
            type="one"
            images={
              <>
                <img className="px-3" src={Figma} alt={Figma} />
              </>
            }
            title="Automate tracking with Github, Gitlab and Sentry"
            text="Add Figma links to any issue as you work on your designs."
            rightImg={
              <img src={FigmaImg} alt={FigmaImg} className="img-fluid" />
            }
            bg="light-blue"
          />
          <CardGroup
            type="one"
            images={
              <>
                <img className="px-3" src={Slack} alt={Slack} />
              </>
            }
            title="Get updates and create issues with Slack"
            text="Receive updates directly in your Slack channels and create issues from discussions."
            rightImg={<img src={Slack2} alt={Slack2} className="img-fluid" />}
            bg="green"
          />
          <CardGroup
            type="two"
            imgOne={<img src={Zapier} alt={Zapier} />}
            titleOne="Connect with 1000+ tools using Zapier"
            textOne="Create new issues based on triggers from Zapier applications."
            imgTwo={<img src={Zapier} alt={Zapier} />}
            titleTwo="Custom workflows using our API"
            textTwo="Query and mutate data using our GraphQL API to build custom workflows."
          />
        </div>
      </div>
    </section>
  );
};

const CardGroup = ({
  type,
  images,
  title,
  text,
  rightImg,
  bg,
  titleOne,
  titleTwo,
  textOne,
  textTwo,
  imgOne,
  imgTwo,
}) => {
  if (type === "one") {
    return (
      <div className={`card-group type-one ${bg}`}>
        <div className="card-text bg-secondary p-5">
          <div className="head d-flex align-items-center">{images}</div>
          <h4 className="fw-bold text-white my-2">{title}</h4>
          <p className="text-secondary">{text}</p>
        </div>
        <div className="card-img p-2">{rightImg}</div>
      </div>
    );
  } else if (type === "two") {
    return (
      <div className={`card-group type-two ${bg}`}>
        <div className="first card-item bg-secondary p-4">
          {imgOne}
          <div className="mx-3">
            <p className="text-light" style={{ margin: 0 }}>
              {titleOne}
            </p>
            <p className="text-secondary">{textOne}</p>
          </div>
        </div>
        <div className="second card-item bg-secondary p-4">
          {imgTwo}
          <div className="mx-3">
            <p className="text-light" style={{ margin: 0 }}>
              {titleTwo}
            </p>
            <p className="text-secondary">{textTwo}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Integrate;
