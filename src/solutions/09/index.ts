import { partOne } from "./partOne";
import { partTwo } from "./partTwo";
import { Motion } from "./types";

const preprocess = (text: string) =>
  text.split("\n").map((line) => {
    const [direction, distance] = line.split(" ");
    return { direction, distance: Number(distance) } as Motion;
  });

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
