import * as React from "react";

import Guess, { type GuessType } from "../Guess";

export type GuessResultsProps = {
  guessList: GuessType[];
};

export default function GuessResults({ guessList }: GuessResultsProps) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <Guess key={guess.id} guess={guess} />
      ))}
    </div>
  );
}
