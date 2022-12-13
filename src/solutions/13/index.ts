import { partOne } from "./partOne";
import { partTwo } from "./partTwo";
import { Packet } from "./types";

const preprocess = (text: string) =>
  text
    .split("\n\n")
    .map((pair) => pair.split("\n").map((line) => JSON.parse(line) as Packet));

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
