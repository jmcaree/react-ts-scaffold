import * as React from "react";
import { render } from "react-dom";
import Hello from "./components/Hello";
import "./styles/site.scss";

const App = () => {
  return (
    <Hello name="World" />
  );
};

render(<App />, document.getElementById("root"));
