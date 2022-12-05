import { Step } from "./types";

export const partOne = (stacks: string[][], steps: Step[]) => {
  const stacksCopy = [...stacks];
  steps.forEach((step) => {
    const { count, from, to } = step;
    const crates = stacksCopy[from].splice(-count, count);
    stacksCopy[to].push(...crates.reverse());
  });
  return stacksCopy.reduce((acc, curr) => `${acc}${curr[curr.length - 1]}`, "");
};
