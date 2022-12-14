import { moveSand } from "./utils";

export const partTwo = (input: string[][]) => {
  const newInput = [
    ...input,
    Array.from({ length: input[0].length }, () => "."),
    Array.from({ length: input[0].length }, () => "#"),
  ];
  let sum = 0;
  while (moveSand(newInput, 0, 500)) {
    sum++;
  }
  return sum + 1;
};
