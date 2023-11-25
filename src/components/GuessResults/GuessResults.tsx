import * as React from "react";

import Guess, { type GuessType } from "../Guess";

export type GuessResultsProps = {
  guessList: GuessType[];
  answer: string;
};

export default function GuessResults({ guessList, answer }: GuessResultsProps) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <Guess key={guess.id} answer={answer} guess={guess} />
      ))}
    </div>
  );
}
