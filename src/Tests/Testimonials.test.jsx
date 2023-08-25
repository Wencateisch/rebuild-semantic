import { render, screen } from "@testing-library/react";
import Testimonial from "../Files/Testimonial";

describe("Testimonial", () => {
  test.skip("renders text correctly", () => {
    render(<Testimonial />);
    const headerElement = screen.getByRole("header", {
      name: "Testimonials",
    });
    expect(headerElement).toBeInTheDocument();
  });
});
