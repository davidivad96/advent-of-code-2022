enum Operation {
  addx = "addx",
  noop = "noop",
}

export type Command = {
  operation: Operation;
  value?: number;
};
