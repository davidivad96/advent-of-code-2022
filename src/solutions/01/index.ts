import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

const preprocess = (text: string) =>
  text.split("\n").reduce(
    (acc, curr) => {
      if (curr === "") {
        acc.push([]);
      } else {
        acc[acc.length - 1].push(Number(curr));
      }
      return acc;
    },
    [[]] as number[][]
  );

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
