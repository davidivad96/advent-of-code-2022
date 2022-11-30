export const partTwo = (input: number[]) => {
  let count = 0;
  let sum = input[0] + input[1] + input[2];
  for (let i = 1; i < input.length - 2; i++) {
    if (input[i] + input[i + 1] + input[i + 2] > sum) {
      count++;
    }
    sum = input[i] + input[i + 1] + input[i + 2];
  }
  return count;
};
