import * as React from "react";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { type GuessType } from "../Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState<GuessType[]>(() =>
    Array.from({ length: NUM_OF_GUESSES_ALLOWED }).map((_, idx) => ({
      id: `guess-${idx}`,
      body: null,
    }))
  );
  const [currentGuess, setCurrentGuess] = React.useState(0);

  function submitGuess(guess: string) {
    const newGuessList = [...guessList];

    const newGuess = {
      id: Math.random(),
      body: guess,
    };
    newGuessList[currentGuess] = newGuess;

    setGuessList(newGuessList);
    setCurrentGuess(currentGuess + 1);
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput submitGuess={submitGuess} />
    </>
  );
}

export default Game;
