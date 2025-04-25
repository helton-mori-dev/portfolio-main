import React from "react";
import { useTranslation } from "react-i18next";
import foto from "../assets/img/foto.png";
import "./AboutMe.scss";

function AboutMe() {
  const { t } = useTranslation();
  return (
    <>
      <section className="main container">
        <h1 className="title">{t("aboutMe")}</h1>

        <a className="botao-azul scroll" href="#sobre" title="Portfolio">
          {t("myWork")}
        </a>
        <a href="#sobre" className="scroll arrow-down">
          Arrow
        </a>
      </section>

      <section id="sobre">
        <div className="container-branco">
          <div className="row container">
            <div className="col-12 col-md-5"></div>
            <div className="col-12 col-md-7">
              <h2 className="titulo-apresentacao titulo">{t("myFunction")}</h2>
            </div>
          </div>
        </div>

        <div className="container-preto">
          <div className="row container">
            <div className="col-md-5">
              <img src={foto} alt="Minha foto" className="foto" />
            </div>
            <div className="col-md-7">
              <p className="texto-fundo-preto paragrafo-direita mb-0 paragrafo-direita-mobile">
                {t("aboutMeExt")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
