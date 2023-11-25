import * as React from "react";

import { Guess } from "../../types";

export type GuessResultsProps = {
  guessList: Guess[];
};

export default function GuessResults({ guessList }: GuessResultsProps) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => (
        <p key={guess.id} className="guess">
          {guess.body}
        </p>
      ))}
    </div>
  );
}
