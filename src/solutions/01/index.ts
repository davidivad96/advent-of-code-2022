import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = text.split("\n").map((line) => parseInt(line));
  return isPartTwo ? partTwo(input) : partOne(input);
};
