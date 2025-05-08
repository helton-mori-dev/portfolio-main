import React, { useState } from "react";
// import "./EcommerceProjects.scss";
import fronza from "../assets/img/fronza.jpg";
import pid from "../assets/img/pid.png";
import porcelanas from "../assets/img/porcelanas.png";
import sdtronic from "../assets/img/sdtronic.jpg";
import tritons from "../assets/img/tritons.jpg";
import sapataria from "../assets/img/sapataria.png";

const images = [fronza, pid, porcelanas, sdtronic, tritons, sapataria];

function EcommerceProjects() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container gallery">
      <h2>E-commerce projects</h2>
      <div className="grid__gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Projeto ${index + 1}`}
            className="thumb"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default EcommerceProjects;
