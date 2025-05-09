import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MenuHeader from "./MenuHeader";
import LateralContact from "./LateralContact";
import "./PageHeader.scss";

function PageHeader() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <header className="row">
        <div className="col-6 col-md-4">
          <button
            className={`i18nbutton btn ${
              currentLanguage === "en" ? "selected" : ""
            }`}
            onClick={() => changeLanguage("en")}
          >
            En
          </button>
          <button
            className={`i18nbutton btn ${
              currentLanguage === "pt" ? "selected" : ""
            }`}
            onClick={() => changeLanguage("pt")}
          >
            Pt
          </button>
        </div>
        <div className="col-4 d-none d-sm-none d-md-block text-center">
          <Link to="/" className="title">
            Helton Mori
          </Link>
        </div>
      </header>
      <MenuHeader />
      <LateralContact />
    </>
  );
}

export default PageHeader;
