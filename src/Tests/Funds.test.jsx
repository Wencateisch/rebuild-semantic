import { render, screen } from "@testing-library/react";
import Funds from "../Files/Funds";

describe("Funds", () => {
  test("renders correctly", () => {
    render(<Funds />);
    const headerElement = screen.getByRole("heading", {
      name: /how to start a fundraiser/i,
    });
    expect(headerElement).toBeInTheDocument();
  });
});
