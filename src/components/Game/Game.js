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
  const [status, setStatus] = React.useState("playing");
  const [guesses, setGuesses] = React.useState([]);

  const onGuess = (guess) => {
    if (guesses.indexOf(guess) < 0) {
      const nextGuesses = [...guesses, guess];
      setGuesses(nextGuesses);
      if (guess === answer) {
        setStatus("won");
      }
      if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
        setStatus("lost");
      }
    }
  };

  return (
    <>
      <PreviousGuesses answer={answer} guesses={guesses} />
      <GuessInput onGuess={onGuess} disabled={status !== "playing"} />
      <Banner answer={answer} guesses={guesses} status={status} />
    </>
  );
}

export default Game;
