import { sumArray } from "../../utils";

export const partOne = (input: number[][]) =>
  input.map(sumArray).reduce((acc, curr) => Math.max(acc, curr), 0);
