import React from "react";
import { range } from "../../utils";

const Guess = ({ children }) =>
  (!children || children.length !== 5
    ? Array.from(range(0, 5).map(() => ""))
    : children.split("")
  ).map((character, index) => (
    <span className="cell" key={index}>
      {character}
    </span>
  ));

export default Guess;
