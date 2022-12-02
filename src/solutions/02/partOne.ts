import { First, Outcome, Round, Second } from "./types";

const shapeScores = {
  X: 1,
  Y: 2,
  Z: 3,
};

const outcomeScores = {
  lose: 0,
  draw: 3,
  win: 6,
};

const getOutcome = (me: Second, oponent: First): Outcome => {
  const oponentShapes: First[] = ["A", "B", "C"];
  const myShapes: Second[] = ["X", "Y", "Z"];
  const oponentIndex = oponentShapes.indexOf(oponent);
  const myIndex = myShapes.indexOf(me);
  const diff = (myIndex - oponentIndex + 3) % 3;
  return diff === 0 ? "draw" : diff === 1 ? "win" : "lose";
};

export const partOne = (input: Round[]) =>
  input.reduce((score, [oponent, me]) => {
    const shapeScore = shapeScores[me];
    const outcomeScore = outcomeScores[getOutcome(me, oponent)];
    return score + shapeScore + outcomeScore;
  }, 0);
