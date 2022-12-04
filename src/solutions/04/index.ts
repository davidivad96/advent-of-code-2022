import { partOne } from "./partOne";
import { partTwo } from "./partTwo";

const preprocess = (text: string) =>
  text.split("\n").map((line) => {
    const row = line.split(",");
    const firstSections = row[0].split("-");
    const secondSections = row[1].split("-");
    return [
      ...[+firstSections[0], +firstSections[1]],
      ...[+secondSections[0], +secondSections[1]],
    ];
  });

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
