import React from "react";
import Hero from "./Hero";
import "./App.css";
import ImageContainer from "./ImageContainer";

function App() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#443a7e" }}
      className="app"
    >
      <div className="top-container">
        <h1
          style={{
            paddingTop: "1rem",
            textAlign: "center",
            fontFamily: "Sniglet, cursive",
            fontWeight: "normal",
            color: "#fa9579",
          }}
          className="header"
        >
          WELCOME
        </h1>
        <Hero />
      </div>

      <div className="middle-container">
        <ImageContainer />
      </div>

      <div className="footer">
        <h1 className="footer-subtitle">Get in Touch</h1>
        <ul className="footer-links">
          <li>
            <a className="footer-link" href="tel:9788527937">
              <i class="fas fa-phone-alt"></i>
            </a>
            <a
              className="footer-link"
              href="https://www.instagram.com/theclownphotography/"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a className="footer-link" href="mailto:">
              <i class="far fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
