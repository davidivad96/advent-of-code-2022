import { partOne } from "./partOne";
import { partTwo } from "./partTwo";
import { Round } from "./types";

const preprocess = (text: string) =>
  text.split("\n").map((line) => line.split(" ") as Round);

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
