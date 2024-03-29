import * as React from "react";

export type GuessInputProps = {
  submitGuess: (guess: string) => void;
  disabled: boolean;
};

export default function GuessInput({ submitGuess, disabled }: GuessInputProps) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submitGuess(guess);
        setGuess("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        name="guess-input"
        value={guess}
        disabled={disabled}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}
