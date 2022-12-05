import { Step } from "./types";

export const processStack = (stack: string): string[] =>
  stack
    .replaceAll(/[\[\]]/g, "")
    .split(/\s{4}/g)
    .map((e) => (e.length > 0 ? e.split(" ") : ""))
    .flat();

export const processStep = (step: string): Step => ({
  count: +step.split(" ")[1],
  from: +step.split(" ")[3] - 1,
  to: +step.split(" ")[5] - 1,
});
