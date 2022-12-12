import { Motion } from "./types";
import { Rope } from "./utils";

export const partOne = (input: Motion[]) => {
  const rope = new Rope(2);
  input.forEach(({ direction, distance }) => {
    rope.move(direction, distance);
  });
  return rope.getLastTail().visited.size;
};
