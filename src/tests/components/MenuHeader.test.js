import { render, screen, fireEvent } from "@testing-library/react";
import MenuHeader from "../../components/MenuHeader";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

describe("MenuHeader components", () => {
  test("Deve renderizar os links do menu", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MenuHeader />
      </I18nextProvider>
    );
    const menuButton = screen.getByTitle("Menu");

    fireEvent.click(menuButton);
    expect(menuButton).toHaveClass("active");

    fireEvent.click(menuButton);
    expect(menuButton).not.toHaveClass("active");
  });
  test("Deve bater com o snapshot", () => {
    const { container } = render(
      <I18nextProvider i18n={i18n}>
        <MenuHeader />
      </I18nextProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
