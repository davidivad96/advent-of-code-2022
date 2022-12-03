import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

const preprocessPartOne = (text: string) => text.split("\n");

const preprocessPartTwo = (text: string) =>
  text.split("\n").reduce(
    (acc, curr) => {
      if (acc[acc.length - 1].length === 3) {
        acc.push([curr]);
      } else {
        acc[acc.length - 1].push(curr);
      }
      return acc;
    },
    [[]] as string[][]
  );

export const runSolution = (text: string, isPartTwo: boolean) => {
  const inputPartOne = preprocessPartOne(text);
  const inputPartTwo = preprocessPartTwo(text);
  return isPartTwo ? partTwo(inputPartTwo) : partOne(inputPartOne);
};
