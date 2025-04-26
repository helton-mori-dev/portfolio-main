import { render, screen } from "@testing-library/react";
import PageHeader from "../../components/PageHeader";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

describe("PageHeader component", () => {
  test("Deve renderizar o título e botoes de idioma", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <PageHeader />
      </I18nextProvider>
    );
    expect(screen.getByText("En")).toBeInTheDocument();
    expect(screen.getByText("Pt")).toBeInTheDocument();
    expect(screen.getByText("Helton Mori")).toBeInTheDocument();
  });
  test("Deve bater com o snapshot", () => {
    const { container } = render(
      <I18nextProvider i18n={i18n}>
        <PageHeader />
      </I18nextProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
