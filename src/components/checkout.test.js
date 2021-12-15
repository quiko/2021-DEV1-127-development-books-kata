import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Checkout from "./checkout";


afterEach(cleanup);

it("should render Checkout component", () => {
  const view = render(<Checkout />);
  expect(view).toBeTruthy();
});
