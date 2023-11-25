import * as React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

export type GuessType = {
  id: React.Key;
  body: string | null;
};

export type GuessProps = {
  guess: GuessType;
  answer: string;
};

export default function Guess({ guess, answer }: GuessProps) {
  const cells = guess.body
    ? checkGuess(guess.body, answer)!
    : range(5).map(() => ({ letter: "", status: null }));
  return (
    <p className="guess">
      {/* 
				The cells do not change throughout the game,
				so it's safe to use the index as key here
			 */}
      {cells.map((cell, idx) => (
        <span key={idx} className={`cell ${cell.status ?? ""}`}>
          {cell.letter}
        </span>
      ))}
    </p>
  );
}
