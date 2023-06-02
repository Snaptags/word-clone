import React from "react";

const GuessInput = ({ onGuess }) => {
  const [guess, setGuess] = React.useState("");
  const onChange = (event) => {
    setGuess(event.target.value.toUpperCase().replace(/[^a-z]/gi, ""));
  };
  const onSubmit = (event) => {
    event.preventDefault();
    onGuess?.(guess);
    console.info({ guess });
    setGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        autoComplete="off"
        type="text"
        pattern="[A-Za-z]{5}"
        title="Must contain exactly 5 letters a-z"
        maxLength={5}
        onChange={onChange}
        value={guess}
      />
    </form>
  );
};

export default GuessInput;
