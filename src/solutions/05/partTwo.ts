import { Step } from "./types";

export const partTwo = (stacks: string[][], steps: Step[]) => {
  const stacksCopy = [...stacks];
  steps.forEach((step) => {
    const { count, from, to } = step;
    const crates = stacksCopy[from].splice(-count, count);
    stacksCopy[to].push(...crates);
  });
  return stacksCopy.reduce((acc, curr) => `${acc}${curr[curr.length - 1]}`, "");
};
