import { Motion } from "./types";
import { Rope } from "./utils";

export const partTwo = (input: Motion[]) => {
  const rope = new Rope(10);
  input.forEach(({ direction, distance }) => {
    rope.move(direction, distance);
  });
  return rope.getLastTail().visited.size;
};
