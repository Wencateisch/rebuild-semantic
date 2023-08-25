import { render, screen, within } from "@testing-library/react";
import Footer from "../Files/Footer";

describe("Footer", () => {
  test("renders correctly", () => {
    render(<Footer />);
    const footerElement = screen.getByText(
      /2021 creed\. all rights reserved\./i,
    );
    expect(footerElement).toBeInTheDocument();
  });
  test("renders text correctly", () => {
    render(<Footer />);
    const footerElement = screen.getByText(/digital partner that worldwide/i);
    expect(footerElement).toBeInTheDocument();
  });
  it("should render list of items", () => {
    render(<Footer />);
    const list = screen.getByTestId("Sp");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items).toHaveLength(5);
  });
  it("should render list", () => {
    render(<Footer />);
    const list = screen.getByTestId("ListItems");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items).toHaveLength(5);
  });
  it("should render list2", () => {
    render(<Footer />);
    const list = screen.getByTestId("ListItems2");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items).toHaveLength(5);
  });
  it("should render list3", () => {
    render(<Footer />);
    const list = screen.getByTestId("ListItems3");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items).toHaveLength(5);
  });
  it("should render list4", () => {
    render(<Footer />);
    const list = screen.getByTestId("ListItems4");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items).toHaveLength(5);
  });
});
