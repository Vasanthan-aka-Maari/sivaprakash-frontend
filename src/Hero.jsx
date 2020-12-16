import React from "react";
import "./Hero.css";
import siva from "./assets/sivaprakash.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-image" src={siva} alt="Siva Prakash" />
      <div className="hero-infoContainer">
        <h1>
          I'm{" "}
          <span
            style={{
              fontFamily: "Sacramento, cursive",
              fontSize: "3.5rem",
              fontWeight: "bold",
              color: "#fa9579",
            }}
          >
            {" "}
            Siva Prakash
          </span>
        </h1>
        <h2>Photographer</h2>
        <ul className="links">
          <li>
            <a className="link" href="tel:9788527937">
              <i class="fas fa-phone-alt"></i>
            </a>
          </li>
          <li>
            <a
              className="link"
              href="https://www.instagram.com/theclownphotography/"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a className="link" href="mailto:">
              <i class="far fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
