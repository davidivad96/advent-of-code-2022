import { moveSand } from "./utils";

export const partOne = (input: string[][]) => {
  let sum = 0;
  while (moveSand(input, 0, 500)) {
    sum++;
  }
  return sum;
};
