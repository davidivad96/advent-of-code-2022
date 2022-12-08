import { FileSystem } from "./utils";

export const partTwo = (input: FileSystem) =>
  input
    .getAllDirectories()
    .map((dir) => dir.getSize())
    .filter((size) => size >= 30000000 - (70000000 - input.getSize()))
    .sort((a, b) => a - b)[0];
