export const partTwo = (input: number[][]) =>
  input.reduce((acc, curr) => {
    const isOverlap = curr[0] <= curr[3] && curr[1] >= curr[2];
    return acc + (isOverlap ? 1 : 0);
  }, 0);
