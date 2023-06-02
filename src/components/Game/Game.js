import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../../components/GuessInput";
import PreviousGuesses from "../../components/PreviousGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const onGuess = (guess) =>
    guesses.indexOf(guess) < 0 && setGuesses([...guesses, guess]);

  return (
    <>
      <PreviousGuesses guesses={guesses} />
      <GuessInput onGuess={onGuess} />
    </>
  );
}

export default Game;
