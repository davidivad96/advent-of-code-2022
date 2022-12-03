import { getPriority } from "./utils";

export const partTwo = (input: string[][]) =>
  input.reduce((acc, curr) => {
    const first = curr[0];
    const second = curr[1];
    const third = curr[2];
    const item = first
      .split("")
      .find((char) => second.includes(char) && third.includes(char))!;
    return acc + getPriority(item);
  }, 0);
