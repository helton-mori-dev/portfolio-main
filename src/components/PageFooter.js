import React from "react";
import { useTranslation } from "react-i18next";
import LateralContact from "./LateralContact";
import "./PageFooter.scss";

function PageFooter() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <section id="footer">
      <div className="container rodape-contato">
        <div className="container-fluid">
          <h2>{t("letsWork")}</h2>
          <a
            className="botao-azul botao-form"
            href="https://www.linkedin.com/in/engheltonmori/"
            title="Contato"
            target="_blank"
            rel="noreferrer"
          >
            {t("contact")}
          </a>
        </div>

        <LateralContact className="contato-footer" />

        <div className="container row linha">
          <div className="col-12"></div>
        </div>
      </div>

      <div className="container creditos">
        <p>
          © <span className="year">{currentYear}</span> – {t("developedBy")}{" "}
          Helton Mori
        </p>
      </div>
    </section>
  );
}

export default PageFooter;
