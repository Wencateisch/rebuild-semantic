import { render, screen } from "@testing-library/react";
import Get from "../Files/Get";

describe("Get The App", () => {
  test("Renders images correctly", () => {
    render(<Get />);
    const imageElement = screen.getByText(
      /lorem ipsum dolor sit amet, consectetur adipisicing elit\. aliquid officiis, qui nobis molestias voluptate fugiat suscipit, velit voluptatum! eveniet, consequuntur illum\?/i,
    );
    expect(imageElement).toBeInTheDocument();
    const linkElement = screen.getByRole("link", {
      name: /download it on app store/i,
    });
    expect(linkElement).toBeInTheDocument();
    const linkElement2 = screen.getByRole("link", {
      name: /get it on google play/i,
    });
    expect(linkElement2).toBeInTheDocument();
  });
});
