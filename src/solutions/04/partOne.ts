export const partOne = (input: number[][]) =>
  input.reduce((acc, curr) => {
    const isFullOverlap =
      (curr[0] >= curr[2] && curr[1] <= curr[3]) ||
      (curr[2] >= curr[0] && curr[3] <= curr[1]);
    return acc + (isFullOverlap ? 1 : 0);
  }, 0);
