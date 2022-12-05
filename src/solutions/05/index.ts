import { transpose2DArray } from "../../utils";
import { partOne } from "./partOne";
import { partTwo } from "./partTwo";
import { Step } from "./types";
import { processStack, processStep } from "./utils";

const preprocess = (text: string): [string[][], Step[]] => {
  const [stacksInput, stepsInput] = text.split("\n\n");
  const stacks: string[][] = transpose2DArray(
    stacksInput.split("\n").reverse().slice(1).map(processStack)
  ).map((stack) => stack.filter(Boolean));
  const steps: Step[] = stepsInput.split("\n").map(processStep);
  return [stacks, steps];
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const [stacks, steps] = preprocess(text);
  return isPartTwo ? partTwo(stacks, steps) : partOne(stacks, steps);
};
