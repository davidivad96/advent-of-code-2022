import { Command } from "./types";

const calculateSignalStrength = (x: number, cycle: number) =>
  [20, 60, 100, 140, 180, 220].includes(cycle) ? x * cycle : 0;

export const partOne = (input: Command[]) =>
  input.reduce(
    ({ x, cycle, signalStrength }, command) => {
      cycle++;
      signalStrength += calculateSignalStrength(x, cycle);
      if (command.operation === "addx") {
        cycle++;
        signalStrength += calculateSignalStrength(x, cycle);
      }
      x += command.value || 0;
      return { x, cycle, signalStrength };
    },
    { x: 1, cycle: 0, signalStrength: 0 }
  ).signalStrength;
