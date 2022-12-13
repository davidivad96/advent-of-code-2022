import { CompareResult, Packet } from "./types";

export const comparePackets = (left: Packet, right: Packet): CompareResult => {
  if (typeof left === "number" && typeof right === "number")
    return left < right ? -1 : left > right ? 1 : 0;
  if (typeof left === "number" && Array.isArray(right))
    return comparePackets([left], right);
  if (Array.isArray(left) && typeof right === "number")
    return comparePackets(left, [right]);
  if (Array.isArray(left) && Array.isArray(right)) {
    while (left.length && right.length) {
      const result = comparePackets(left.shift(), right.shift());
      if (result !== 0) {
        return result;
      }
    }
    return left.length < right.length ? -1 : left.length > right.length ? 1 : 0;
  }
  throw new Error("Invalid input");
};
