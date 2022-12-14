export const moveSand = (input: string[][], i: number, j: number): boolean => {
  if (i === input.length - 1 || j === input[i].length - 1) {
    return false;
  }
  if (
    input[i + 1][j] === "#" &&
    input[i + 1][j - 1] === "#" &&
    input[i + 1][j + 1] === "#"
  ) {
    input[i][j] = "#";
    return i !== 0 || j !== 500;
  } else if (input[i + 1][j] === ".") {
    return moveSand(input, i + 1, j);
  } else if (input[i + 1][j - 1] === ".") {
    return moveSand(input, i + 1, j - 1);
  } else if (input[i + 1][j + 1] === ".") {
    return moveSand(input, i + 1, j + 1);
  }
};
