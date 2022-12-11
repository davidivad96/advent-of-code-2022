import { Command } from "./types";

const calculatePixel = (x: number, cycle: number) =>
  [x - 1, x, x + 1].includes(cycle) ? "#" : ".";

export const partTwo = (input: Command[]) => {
  const { screen } = input.reduce(
    ({ x, cycle, screen, width }, command) => {
      screen[Math.floor(cycle / width)].push(calculatePixel(x, cycle % width));
      cycle++;
      if (command.operation === "addx") {
        screen[Math.floor(cycle / width)].push(
          calculatePixel(x, cycle % width)
        );
        x += command.value || 0;
        cycle++;
      }
      return { x, cycle, screen, width };
    },
    { x: 1, cycle: 0, screen: [[], [], [], [], [], []], width: 40 }
  );
  for (const row of screen) {
    console.log(row.join(" "));
  }
  return;
};
