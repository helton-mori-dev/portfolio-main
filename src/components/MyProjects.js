import React from "react";
import { useTranslation, Trans } from "react-i18next";
import "./MyProjects.scss";
import { Link } from "react-router-dom";

import americanas from "../assets/img/americanas.png";
import amil from "../assets/img/amil.png";
import ifood from "../assets/img/ifood.png";
import natura from "../assets/img/natura.png";
import prudential from "../assets/img/prudential.png";
import amaar from "../assets/img/foto-amaar.png";
import viso from "../assets/img/foto-viso.png";
// import mentor from "../assets/img/foto-mentor.png";

const logos = [
  { name: "Americanas", src: americanas },
  { name: "amil", src: amil },
  { name: "ifood", src: ifood },
  { name: "natura", src: natura },
  { name: "prudential", src: prudential },
];

function MyProjects() {
  const { t } = useTranslation();
  return (
    <section id="trabalhos">
      <div className="container-preto">
        <div className="container row trabalho">
          <h2 className="col-12 titulo">{t("companiesWorked")}</h2>
          <div>
            <ul className="empresas">
              {logos.map((logo) => (
                <li key={logo.name} className="empresa">
                  <img src={logo.src} alt={logo.name} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container row trabalho">
          <h2 className="col-12 titulo">{t("recentWorksTitle")}</h2>
          <div className="col-12 col-md-6">
            <h3>{t("workOngName")}</h3>
            <p className="texto-fundo-preto">
              <Trans i18nKey="workOng" components={{ strong: <strong /> }} />
            </p>
            <a
              className="link-trabalho"
              href="https://michelle-kato.medium.com/building-a-website-for-ngo-8fdcb5a36c2f"
              target="_blank"
              rel="noreferrer"
            >
              UX / UI link
            </a>
            <br />
            <a
              href="https://helton-mori-dev.github.io/ong-amaar-vue/"
              className="link-trabalho"
              target="_blank"
              rel="noreferrer"
            >
              {t("goTo")} {t("workOngName")}
            </a>
          </div>
          <div className="col-12 col-md-6">
            <img src={amaar} alt="ONG amaar" />
          </div>
        </div>

        <div className="container row trabalho">
          <div className="col-12 col-md-6">
            <h3>E-commerce websites</h3>
            <p className="texto-fundo-preto">
              <Trans
                i18nKey="ecommerceProjects"
                components={{ strong: <strong /> }}
              />
            </p>
            <Link to="/ecommerce" className="link-trabalho">
              {t("goTo")} Ecommerce Projects
            </Link>
          </div>
          <div className="col-12 col-md-6">
            <img src={viso} alt="Ecommerce Projects" />
          </div>
        </div>

        {/* <div className="container row trabalho">
          <div className="col-12 col-md-6">
            <h3>Front end Mentor E-commerce page</h3>
            <p className="texto-fundo-preto">{t("workMentor")}</p>
            <a
              href="https://helton-mori-dev.github.io/front-end-mentor-e-commerce/"
              className="link-trabalho"
              target="_blank"
              rel="noreferrer"
            >
              {t("goTo")} Front end Mentor
            </a>
          </div>
          <div className="col-12 col-md-6">
            <img src={mentor} alt="Front end Mentor" />
          </div>
        </div> */}
      </div>
    </section>
  );
}
export default MyProjects;
