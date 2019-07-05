import * as React from "react";

interface IHelloProps {
  name: string;
}

const Hello = (props: IHelloProps) => {
  return (
    <div>Hello, {props.name}!</div>
  );
};

export default Hello;
