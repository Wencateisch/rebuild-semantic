import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Navbar from "../Files/Navbar";

test.skip("Does click event", async () => {
  user.setup();
  const buttonHandle = jest.fn();
  render(<Navbar clickElement={buttonHandle} />);
  const clickElement = screen.getByTestId("download-app");
  await user.click(clickElement);
  expect(buttonHandle).toHaveBeCalled();
});
