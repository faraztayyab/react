import React from "react";
import Heroo from "../images/Hero.jpg";
const Hero = () => {
  return (
    <div>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src={Heroo}
          alt=""
          width="72"
          height="57"
        />
        <h1 className="display-5 fw-bold bg-font ">Welcome to My art Gallery</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
          Where lines dance and colors sing, worlds unfold on canvas and paper. Immerse yourself in the vibrant tapestry of my art, where strokes of whimsy and whispers of reality intertwine.
From whispered gouache washes to bold oil symphonies, my art is a playground for the senses. Come explore, get lost, and discover the echoes of your own imagination.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="/gallery" type="button"  className="btn bg-border bg-font btn_i btn-lg px-4 gap-3">
              Explore Gallery
            </a>
            <a
              href="/"
              type="button"
              className="btn btn-outline-secondary btn-lg bg-border bg-font btn_i px-4"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
