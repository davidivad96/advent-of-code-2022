import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

export const runSolution = (text: string, isPartTwo: boolean) => {
  return isPartTwo ? partTwo(text) : partOne(text);
};
