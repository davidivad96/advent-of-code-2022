import { deepClone } from "../../utils";
import { Packet } from "./types";
import { comparePackets } from "./utils";

export const partTwo = (input: Packet[][]) => {
  const divider1 = [[2]];
  const divider2 = [[6]];
  const result = [...input.flat(), divider1, divider2];
  result.sort((a, b) =>
    comparePackets(deepClone(a as Packet[]), deepClone(b as Packet[]))
  );
  const divider1Index = result.findIndex(
    (packet) => JSON.stringify(packet) === JSON.stringify(divider1)
  );
  const divider2Index = result.findIndex(
    (packet) => JSON.stringify(packet) === JSON.stringify(divider2)
  );
  return (divider1Index + 1) * (divider2Index + 1);
};
