import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const Guess = ({ answer, children }) =>
  (!children || children.length !== 5
    ? Array.from(range(0, 5).map(() => ({})))
    : checkGuess(children, answer)
  ).map(({ letter, status }, index) => (
    <span className={`cell ${status}`} key={index}>
      {letter}
    </span>
  ));

export default Guess;
