import { render, screen } from "@testing-library/react";
import Cards from "../Files/Cards";
import Flickity from "react-flickity-component";

describe("Cards", () => {
  test.skip("renders content correctly", () => {
    render(<Cards />, {
      wrapper: Flickity,
    });
    const headerElement = screen.getByTestId("Heading");
    expect(headerElement).toBeInTheDocument();
    const LinkElement = screen.getByTestId("Link1");
    expect(LinkElement).toBeCalled();
  });
  /**
   * Error: You need to run with a version of node that supports ES Modules in the VM API. See https://jestjs.io/docs/ecmascript-modules
   */
});
