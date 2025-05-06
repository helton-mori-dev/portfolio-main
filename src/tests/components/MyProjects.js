// src/tests/components/MyProjects.test.js
import { render, screen } from "@testing-library/react";
import MyProjects from "../../components/MyProjects";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

describe("MyProjects Component", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <MyProjects />
      </I18nextProvider>
    );
  });

  test("deve exibir o título das empresas e trabalhos recentes", () => {
    expect(
      screen.getByRole("heading", { name: i18n.t("companiesWorked") })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: i18n.t("recentWorksTitle") })
    ).toBeInTheDocument();
  });

  test("deve renderizar todas as imagens de empresas", () => {
    const logos = ["Americanas", "amil", "ifood", "natura", "prudential"];
    logos.forEach((name) => {
      expect(screen.getByAltText(name)).toBeInTheDocument();
    });
  });

  test("deve conter links para os projetos com texto correto", () => {
    expect(
      screen.getByRole("link", {
        name: `${i18n.t("goTo")} ${i18n.t("workOngName")}`,
      })
    ).toHaveAttribute(
      "href",
      "https://helton-mori-dev.github.io/ong-amaar-vue/"
    );

    expect(
      screen.getByRole("link", {
        name: `${i18n.t("goTo")} Viso Store`,
      })
    ).toHaveAttribute("href", "https://www.visostore.com.br/");

    expect(
      screen.getByRole("link", {
        name: `${i18n.t("goTo")} Front end Mentor`,
      })
    ).toHaveAttribute(
      "href",
      "https://helton-mori-dev.github.io/front-end-mentor-e-commerce/"
    );
  });

  test("deve bater com o snapshot", () => {
    const { container } = render(
      <I18nextProvider i18n={i18n}>
        <MyProjects />
      </I18nextProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
