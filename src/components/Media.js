import React from "react";
import Video from "../images/video1.mp4";

const Media = () => {
  return (
    <section className="media bg-dark text-light">
      <div className="container py-5">
        <div className="top mb-4 text-center">
          <img src="" alt="" />
          linear.fm
        </div>
        <div
          className="row bg-secondary p-4"
          style={{
            width: "800px",
            maxWidth: "100%",
            margin: "0 auto",
            borderRadius: "10px",
          }}
        >
          <div className="col-md-6 vidwrapper text-center">
            <video controls src={Video} className="img-fluid" />
          </div>
          <div className="founder-text col-md-6 px-5">
            <div className="head mb-3">
              <strong>William M. Tsikata</strong>
              <p>CEO, Founder</p>
            </div>
            <div className="body" style={{ fontSize: "12px" }}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt facere iste iure deserunt provident, reiciendis minima
                minus eum quam consectetur aut voluptas officia? Excepturi,
                neque fugiat labore odio veniam error.
              </p>
              <p>
                Iciendis minima minus eum quam consectetur aut voluptas officia?
                Excepturi, neque Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Dolorem earum quasi maxime repudiandae
                commodi, maiores magnam pariatur repellat, minima obcaecati
                natus itaque provident! Quod numquam asperiores, distinctio
                corrupti molestias voluptas. fugiat labore odio veniam error.
              </p>
              <p className="text-secondary" style={{ fontStyle: "italic" }}>
                Founded Linearr in 2021
              </p>
            </div>
          </div>
        </div>
        <div className="cta mt-4 text-center">
          <button className="btn btn-primary">
            Listen to all episodes &raquo;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Media;
