import React from "react";
import { useTranslation, Trans } from "react-i18next";
import foto from "../assets/img/foto.png";
import "./AboutMe.scss";

function AboutMe() {
  const { t } = useTranslation();
  return (
    <>
      <section className="main container">
        <h2 className="title">
          <Trans i18nKey="aboutMe" components={{ strong: <strong /> }} />
        </h2>

        <a
          className="botao-azul scroll"
          href="https://drive.google.com/uc?export=download&id=1N85cSs-E2o_YE6oPe8lKThAJHWkJlv_6"
          title="Portfolio"
        >
          {t("download")}
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
              <p
                className="texto-fundo-preto paragrafo-direita mb-0 paragrafo-direita-mobile"
                style={{ whiteSpace: "pre-wrap" }}
              >
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
