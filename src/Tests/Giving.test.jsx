import { render, screen } from "@testing-library/react";
import Giving from "../Files/Giving";

describe("Creed Giving", () => {
  test("renders correctly", () => {
    render(<Giving />);
    const Element2 = screen.getByTestId("Heading");
    expect(Element2).toBeInTheDocument();
  });
  test("renders paragraph correctly", () => {
    render(<Giving />);
    const para1 = screen.getAllByTestId("Paragraph1");
    expect(para1).toHaveLength(6);
  });
});
