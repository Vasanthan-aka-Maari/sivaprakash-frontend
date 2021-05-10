import React, { useEffect, useState } from "react";
import "./ImageContainer.css";
import db from "./firebase";

function ImageContainer() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    db.collection("images").onSnapshot((snapshot) => {
      setImages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#292826", paddingTop: "3rem" }}>
      <h1
        className="imageContainer-title"
        style={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: "normal",
          paddingBottom: "10px",
          color: "#f9d342",
        }}
      >
        My Works
      </h1>
      <div className="imageContainer">
        {images.map((image) => (
          <div key={image} className="image">
            <img src={image.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageContainer;
