import { transpose2DArray } from "../../utils";
import { viewIsNotBlocked, isAtEdge } from "./utils";

export const partOne = (input: number[][]) => {
  const N = input.length;
  const transposedInput = transpose2DArray(input);
  return input.flat().reduce((acc, _curr, index) => {
    const i = Math.floor(index / N);
    const j = index % N;
    return (
      acc +
      (isAtEdge(i, j, N) ||
      viewIsNotBlocked(input[i], j) ||
      viewIsNotBlocked(transposedInput[j], i)
        ? 1
        : 0)
    );
  }, 0);
};
