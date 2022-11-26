import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Comprobantes/i);
  expect(linkElement).toBeInTheDocument();
});
