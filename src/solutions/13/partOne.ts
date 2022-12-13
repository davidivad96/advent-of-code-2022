import { Packet } from "./types";
import { comparePackets } from "./utils";

export const partOne = (input: Packet[][]) =>
  input.reduce(
    (acc, curr, index) =>
      acc + (comparePackets(curr[0], curr[1]) === -1 ? index + 1 : 0),
    0
  );
