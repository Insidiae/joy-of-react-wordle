import * as React from "react";
import { range } from "../../utils";

export type GuessType = {
  id: React.Key;
  body: string | null;
};

export type GuessProps = {
  guess: GuessType;
};

export default function Guess({ guess }: GuessProps) {
  const cells = guess.body ? guess.body.split("") : range(5).map(() => "");
  return (
    <p className="guess">
      {/* 
				The cells do not change throughout the game,
				so it's safe to use the index as key here
			 */}
      {cells.map((char, idx) => (
        <span key={idx} className="cell">
          {char}
        </span>
      ))}
    </p>
  );
}
