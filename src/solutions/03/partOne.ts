import { getPriority } from "./utils";

export const partOne = (input: string[]) =>
  input.reduce((acc, curr) => {
    const first = curr.slice(0, curr.length / 2);
    const second = curr.slice(curr.length / 2);
    const item = first.split("").find((char) => second.includes(char))!;
    return acc + getPriority(item);
  }, 0);
