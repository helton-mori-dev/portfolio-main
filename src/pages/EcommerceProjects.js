import React, { useEffect, useState } from "react";
import "./EcommerceProjects.scss";
import fronza from "../assets/img/fronza.jpg";
import pid from "../assets/img/pid.png";
import porcelanas from "../assets/img/porcelanas.png";
import sdtronic from "../assets/img/sdtronic.jpg";
import tritons from "../assets/img/tritons.jpg";
import sapataria from "../assets/img/sapataria.png";

const images = [fronza, pid, porcelanas, sdtronic, tritons, sapataria];

function EcommerceProjects() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedImage) {
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
    } else {
      setIsVisible(false);
    }
  }, [selectedImage]);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      setSelectedImage(null);
    }, 300);
  };

  return (
    <div className="container gallery">
      <h2 className="gallery__title">E-commerce projects</h2>
      <div className="grid__gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Projeto ${index + 1}`}
            className="gallery__thumb"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
      {selectedImage && (
        <div
          className={`gallery__overlay ${isVisible ? "visible" : ""}`}
          onClick={closeModal}
        >
          <div
            className={`gallery__popup ${isVisible ? "visible" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="botao active gallery__close"
              title="Fechar Imagem"
              onClick={() => setSelectedImage(null)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img
              className="gallery__full-image"
              src={selectedImage}
              alt="Imagem ampliada"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EcommerceProjects;
