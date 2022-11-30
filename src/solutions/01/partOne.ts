export const partOne = (input: number[]) => {
  let count = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] > input[i - 1]) {
      count++;
    }
  }
  return count;
};
