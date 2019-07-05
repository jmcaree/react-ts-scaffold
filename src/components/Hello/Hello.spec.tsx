import { render } from "@testing-library/react";
import * as React from "react";
import Hello from "./Hello";

describe("Hello", () => {
  it("renders", () => {
    const renderResult = render(<Hello name="World" />);
  });
});
