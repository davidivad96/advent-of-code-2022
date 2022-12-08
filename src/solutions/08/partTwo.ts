import { transpose2DArray } from "../../utils";
import { calculateScenicScore, calculateViewDistance } from "./utils";

export const partTwo = (input: number[][]) => {
  const N = input.length;
  const transposedInput = transpose2DArray(input);
  return Math.max(
    ...input.flat().reduce((acc, _curr, index) => {
      const i = Math.floor(index / N);
      const j = index % N;
      return [
        ...acc,
        calculateScenicScore(
          [
            calculateViewDistance(input[i], j),
            calculateViewDistance(transposedInput[j], i),
          ].flat()
        ),
      ];
    }, [])
  );
};
