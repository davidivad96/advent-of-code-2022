import { Monkey } from "./utils";

const N_ROUNDS = 20;

export const partOne = (input: Monkey[]) => {
  Monkey.modulo = input
    .map((monkey) => monkey.test.divisibleBy)
    .reduce((acc, curr) => acc * curr, 1);
  for (let i = 0; i < N_ROUNDS; i++) {
    input.forEach((monkey, _i, arr) => {
      const actions = monkey.processItems(true);
      actions.forEach((action) => {
        arr[action.toMonkey].receiveAction(action);
      });
    });
  }
  return input
    .map((monkey) => monkey.nItemsInspected)
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, curr) => acc * curr, 1);
};
