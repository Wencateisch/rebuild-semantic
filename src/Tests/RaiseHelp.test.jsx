import { render, screen } from "@testing-library/react";
import RaiseHelp from "../Files/RaiseHelp";

describe("RaiseHelp", () => {
  test("Renders correctly", () => {
    render(<RaiseHelp />);
    const headerElement2 = screen.getByRole("heading");
    expect(headerElement2).toBeInTheDocument();
  });
  test("renders link corrently", () => {
    render(<RaiseHelp />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "mailto:demo@demo.com");
  });
});
