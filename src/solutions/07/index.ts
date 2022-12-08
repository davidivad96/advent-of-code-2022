import { partOne } from "./partOne";
import { partTwo } from "./partTwo";
import { FileSystem } from "./utils";

const preprocess = (text: string) => {
  const filesystem = new FileSystem();
  for (const line of text.split("\n").slice(2)) {
    if (line.startsWith("$")) {
      const [_, command, args] = line.split(" ");
      if (command === "cd") {
        filesystem.cd(args);
      }
    } else {
      const [command, args] = line.split(" ");
      if (command === "dir") {
        filesystem.dir(args);
      } else {
        filesystem.file(args, Number(command));
      }
    }
  }
  filesystem.cdToRoot();
  return filesystem;
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
