import { render, screen } from "@testing-library/react";
import HomepageSlides from "../Files/HomepageSlides";

describe("Home Page Images", () => {
  test("render images correctly", () => {
    render(<HomepageSlides />);
    const imageElement1 = screen.getAllByRole("img");
    expect(imageElement1).toHaveLength(5);
  });
});
