import { partOne } from "./partOne";
import { partTwo } from "./partTwo";
import { Monkey } from "./utils";

const processMonkey = (monkey: string) => {
  const lines = monkey.split("\n");
  const items = lines[1].match(/\d+/g).map(Number);
  const operation = lines[2].match(/old .*/g)[0];
  const test = [Number(lines[3].match(/[a-z]+ by \d+/g)[0].split(" ")[2])];
  test.push(Number(lines[4].match(/(throw to monkey) \d+/g)[0].split(" ")[3]));
  test.push(Number(lines[5].match(/(throw to monkey) \d+/g)[0].split(" ")[3]));
  return new Monkey(items, operation, test);
};

const preprocess = (text: string) => {
  const monkeys = text.split("\n\n");
  return monkeys.map(processMonkey);
};

export const runSolution = (text: string, isPartTwo: boolean) => {
  const input = preprocess(text);
  return isPartTwo ? partTwo(input) : partOne(input);
};
