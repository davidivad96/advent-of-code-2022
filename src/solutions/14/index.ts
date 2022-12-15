import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

const preprocess = (text: string) => {
  const paths = text.split("\n").map((line) =>
    line.split(" -> ").map((coordinates) =>
      coordinates
        .split(",")
        .map((coordinate, i) => Number(coordinate))
        .reverse()
    )
  );
  const nRows = Math.max(...paths.flat().map((path) => path[0]));
  const nColumns = Math.max(...paths.flat().map((path) => path[1])) + 500;
  const cave = Array.from({ length: nRows + 1 }, () =>
    Array.from({ length: nColumns + 1 }, () => ".")
  );
  paths.forEach((path) => {
    path.forEach((coordinates, i, arr) => {
      if (i < arr.length - 1) {
        const [x, y] = coordinates;
        const [xNext, yNext] = arr[i + 1];
        if (x === xNext) {
          for (let j = Math.min(y, yNext); j <= Math.max(y, yNext); j++) {
            cave[x][j] = "#";
          }
        } else {
          for (let j = Math.min(x, xNext); j <= Math.max(x, xNext); j++) {
            cave[j][y] = "#";
          }
        }
      }
    });
  });
  return cave;
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
