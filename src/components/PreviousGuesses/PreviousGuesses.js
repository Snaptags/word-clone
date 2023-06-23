import React from "react";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function PreviousGuesses({ answer, guesses }) {
  return (
    <div className="guess-results">
      {[
        ...guesses,
        ...Array.from(range(guesses.length, NUM_OF_GUESSES_ALLOWED)),
      ].map((guess) => (
        <p className="guess" key={guess}>
          <Guess answer={answer}>{guess}</Guess>
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
