import { FileSystem } from "./utils";
import { sumArray } from "../../utils";

export const partOne = (input: FileSystem) =>
  sumArray(
    input
      .getAllDirectories()
      .map((dir) => dir.getSize())
      .filter((size) => size <= 100000)
  );
