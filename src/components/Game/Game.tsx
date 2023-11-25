import * as React from "react";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { type GuessType } from "../Guess";
import { checkGuess } from "../../game-helpers";

function generateAnswer() {
  // Pick a random word.
  const answer = sample(WORDS);
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  return answer;
}

type GameStatus = "active" | "success" | "fail";

function Game() {
  const [answer, setAnswer] = React.useState(() => generateAnswer());
  const [guessList, setGuessList] = React.useState<GuessType[]>(() =>
    Array.from({ length: NUM_OF_GUESSES_ALLOWED }).map((_, idx) => ({
      id: `guess-${idx}`,
      body: null,
    }))
  );
  const [currentGuess, setCurrentGuess] = React.useState(0);
  const [status, setStatus] = React.useState<GameStatus>("active");

  function submitGuess(guess: string) {
    const newGuessList = [...guessList];

    const newGuess = {
      id: Math.random(),
      body: guess,
    };
    newGuessList[currentGuess] = newGuess;

    setGuessList(newGuessList);
    setCurrentGuess(currentGuess + 1);

    const isCorrectGuess = checkGuess(guess, answer)?.every(
      (cell) => cell.status === "correct"
    );

    if (isCorrectGuess) {
      setStatus("success");
    } else if (currentGuess === 5) {
      setStatus("fail");
    }
  }

  function restartGame() {
    const newAnswer = generateAnswer();
    const newGuessList = Array.from({ length: NUM_OF_GUESSES_ALLOWED }).map(
      (_, idx) => ({
        id: `guess-${idx}`,
        body: null,
      })
    );

    setAnswer(newAnswer);
    setCurrentGuess(0);
    setGuessList(newGuessList);
    setStatus("active");
  }

  return (
    <>
      <GuessResults answer={answer} guessList={guessList} />
      {status === "success" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{currentGuess} guesses</strong>.
          </p>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}
      {status === "fail" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}
      <GuessInput
        submitGuess={submitGuess}
        disabled={status === "success" || status === "fail"}
      />
    </>
  );
}

export default Game;
