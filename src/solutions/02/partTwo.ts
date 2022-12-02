import { First, Round, Second, Shape } from "./types";

const shapeScores = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const outcomeScores = {
  X: 0,
  Y: 3,
  Z: 6,
};

const getMyShape = (outcome: Second, oponent: First): Shape => {
  const oponentShapes: First[] = ["A", "B", "C"];
  const myShapes: Shape[] = ["rock", "paper", "scissors"];
  const oponentIndex = oponentShapes.indexOf(oponent);
  const myIndex =
    (oponentIndex + (outcome === "Z" ? 1 : outcome === "Y" ? 0 : 2)) % 3;
  return myShapes[myIndex];
};

export const partTwo = (input: Round[]) =>
  input.reduce((score, [oponent, outcome]) => {
    const shapeScore = shapeScores[getMyShape(outcome, oponent)];
    const outcomeScore = outcomeScores[outcome];
    return score + shapeScore + outcomeScore;
  }, 0);
