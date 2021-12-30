import React from "react";
import Avatar from "../images/avatar.png";
import Avatar1 from "../images/avatar1.png";

const Testimonial = () => {
  return (
    <section className="testimonial py-5 bg-dark">
      <div className="container py-5">
        <div className="section-header mb-4">
          <h1 className="text-light fw-bold">Loved by product people</h1>
        </div>
        <div className="testimonial-cards">
          <div className="group">
            <Card
              name="Assempah C. Edward"
              tweet="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, maxime?"
              date="Dec 12"
              handle="assempah_c_d"
              avatar={Avatar1}
            />

            <Card
              name="Assempah Davina"
              tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, provident corrupti recusandae doloremque sit amet consectetur adipisicing elit. Tempor adipisicing elit. Tempore  provident corrupti reoloremque nesciunt saepe."
              date="Dec 12"
              handle="assempah_davina"
              avatar={Avatar}
            />
            <Card
              name="Micheal Darko Doudu"
              tweet="Lorem ipsum dolor sit amet consectetur lit. Tempore, provident corrupti recusandae doloremquetur adipisicing elit. Tempore  provident corrupti reoloremque nesciunt saepe."
              date="Dec 24"
              handle="micky_d"
              avatar={Avatar1}
            />
          </div>
          <div className="group">
            <Card
              name="Theophilus G. Deiteh"
              tweet="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necesdistinctio facere a facilis, nihil sapiente exercitationem aspernatur, aliquam iste ullam enim? Dolorem, suscipit asperiores commodi at culpa quisquam, impedit et cum maiores voluptate necessitatibus repellat? Ipsa sequi praesentium eveniet."
              date="Oct 13"
              handle="blaqqqq"
              avatar={Avatar1}
            />
            <Card
              name="Random M. Person"
              tweet="Sit amet, consectetur adipisicing elit. Necessitatibus dignissimos ullam consequuntur iure delectus, debitis nihil dolorem suscipitam enim? Dolorem, suscipit asperiores commodi at culpa quisquam, impedit et cuiet."
              date="Dec 12"
              handle="rando246"
              avatar={Avatar}
            />
            <Card
              name="Random M. Person"
              tweet="Sebitis nihil dolorem suscipitam enim? Dolorem, impedit et cum maiores voluptate necessitatibus repellat? Ipsa sequi praesentium eveniet."
              date="Dec 12"
              handle="rando246"
              avatar={Avatar1}
            />
            <Card
              name="Random M. Person"
              tweet="Sebit necessitatibus repellat? Ipsa sequi praesentium eveniet."
              date="Dec 12"
              handle="rando246"
              avatar={Avatar}
            />
          </div>
          <div className="group">
            <Card
              name="Random M. Person"
              tweet="Emorio ipsnihil sapiente exercitationem aspernatur, aliquam iste ullam enim? Dolorem, suscipit asperiores cessitatibus repellat? Ipsa sequi praesentium eveniet."
              date="Dec 12"
              handle="rando246"
              avatar={Avatar1}
            />
            <Card
              name="Random M. Person"
              tweet="Sit ametmaiores voluptate necessitatibus repellat? Ipsa sequi praesentium eveniet."
              date="Dec 12"
              handle="rando246"
              avatar={Avatar}
            />
            <Card
              name="Random M. Person"
              tweet="Sebitis nihil dolorem suscipitam enim? Dolorem, impedit et cum maiores voluptate necessitatibus repellat? Ipsa sequi praesentium eveniet."
              date="Dec 12"
              handle="rando246"
              avatar={Avatar1}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ avatar, name, handle, date, tweet }) => {
  return (
    <div
      className="card-item my-3 bg-secondary p-3"
      style={{ borderRadius: "10px" }}
    >
      <img src={avatar} alt={avatar} height="50px" />
      <div className="mx-3">
        <p style={{ margin: 0 }}>
          <span className="text-light">{name}</span>
          <span className="text-secondary"> @{handle}</span>
          <span className="text-secondary"> - {date}</span>
        </p>
        <p className="text-light">{tweet}</p>
      </div>
    </div>
  );
};

export default Testimonial;
