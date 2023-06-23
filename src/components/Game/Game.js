import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../../components/GuessInput";
import PreviousGuesses from "../../components/PreviousGuesses";
import { Banner } from "../../components/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const status =
    guesses.length < NUM_OF_GUESSES_ALLOWED
      ? guesses[guesses.length - 1] === answer
        ? "won"
        : "playing"
      : "lost";

  const onGuess = (guess) =>
    guesses.indexOf(guess) < 0 && setGuesses([...guesses, guess]);

  return (
    <>
      <PreviousGuesses answer={answer} guesses={guesses} />
      <GuessInput onGuess={onGuess} disabled={status !== "playing"} />
      <Banner answer={answer} guesses={guesses} status={status} />
    </>
  );
}

export default Game;
