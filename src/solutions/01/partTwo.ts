import { sumArray } from "../../utils";

export const partTwo = (input: number[][]) =>
  sumArray(
    input
      .map(sumArray)
      .sort((a, b) => b - a)
      .slice(0, 3)
  );
