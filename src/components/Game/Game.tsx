import * as React from "react";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { type Guess } from "../../types";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState<Guess[]>([]);

  function submitGuess(guess: string) {
    const newGuess = {
      id: Math.random(),
      body: guess,
    };
    setGuessList([...guessList, newGuess]);
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput submitGuess={submitGuess} />
    </>
  );
}

export default Game;
