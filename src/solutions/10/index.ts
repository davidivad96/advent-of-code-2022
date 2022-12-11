import { partOne } from "./partOne";
import { partTwo } from "./partTwo";
import { Command } from "./types";

const preprocess = (text: string) =>
  text.split("\n").map(
    (line) =>
      ({
        operation: line.split(" ")[0],
        value: parseInt(line.split(" ")[1]) || undefined,
      } as Command)
  );

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
