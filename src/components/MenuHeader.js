import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./MenuHeader.scss";

function MenuHeader() {
  const { t } = useTranslation();
  const [menuActive, setMenuActive] = useState(false);

  const links = [
    {
      class: "inicio",
      href: process.env.PUBLIC_URL + "/",
      title: "linkHome",
    },
    {
      class: "sobre-menu",
      href: "#sobre",
      title: "linkAbout",
    },
    {
      class: "trabalhos scroll",
      href: "#trabalhos",
      title: "linkWork",
    },
    {
      class: "contato-menu scroll",
      href: "#footer",
      title: "Contato",
    },
  ];

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuActive((prev) => !prev);
  };

  const closeMenuAndScroll = (e) => {
    setMenuActive(false);
    const href = e.currentTarget.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div className="col-6 col-md-4 text-right">
        <div
          className={`botao ${menuActive ? "active" : ""}`}
          onClick={toggleMenu}
          title="Menu"
        >
          Menu
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`nav-left ${menuActive ? "active" : ""}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={link.class}
            title={t(link.title)}
            onClick={closeMenuAndScroll}
          >
            {t(link.title)}
          </a>
        ))}
      </div>
    </>
  );
}

export default MenuHeader;
