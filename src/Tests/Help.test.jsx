import { render, screen } from "@testing-library/react";
import Help from "../Files/Help";
import user from "@testing-library/user-event";

describe("Help", () => {
  test("hide paragraph", async () => {
    user.setup();
    render(<Help />);
    const paraElement = screen.getByTestId("Hide");
    const spanElement = screen.getByText("X");
    await user.dblClick(spanElement);
    expect(paraElement).toHaveStyle("display:none");
  });
});
