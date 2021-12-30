import React from "react";

const Media = () => {
  return (
    <section className="media bg-dark text-light">
      <div className="container py-5">
        <div className="top mb-4 text-center">
          <img src="" alt="" />
          linear.fm
        </div>
        <div
          className="d-md-flex bg-secondary p-4"
          style={{
            width: "800px",
            maxWidth: "100%",
            margin: "0 auto",
            borderRadius: "10px",
          }}
        >
          <div className="vidwrapper text-center">
            <video
              controls
              autoPlay
              poster="https://image.mux.com/ohgddJyrVctP500y4S902Gzp4ef59mJA005vjbaE3h1Fe4/thumbnail.png?width=640&amp;fit_mode=preserve&amp;time=1"
              height=""
              width="100%"
              src="blob:https://linear.app/c73baa7b-4322-4cde-beae-6adc249cc5fa"
              __idm_id__="154443777"
            ></video>
          </div>
          <div className="founder-text px-5">
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
