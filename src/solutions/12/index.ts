import { partOne } from "./partOne";
import { partTwo } from "./partTwo";
import { HeightMap } from "./utils";

const preprocessPartOne = (text: string) => {
  const map = text.split("\n").map((line) => line.split(""));
  return new HeightMap(map, "S", "E", "asc");
};

const preprocessPartTwo = (text: string) => {
  const map = text.split("\n").map((line) => line.split(""));
  return new HeightMap(map, "E", "S", "desc");
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const inputPartOne = preprocessPartOne(text);
  const inputPartTwo = preprocessPartTwo(text);
  return isPartTwo ? partTwo(inputPartTwo) : partOne(inputPartOne);
};
