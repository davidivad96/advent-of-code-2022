export const isAtEdge = (i: number, j: number, N: number): boolean =>
  i === 0 || j === 0 || i === N - 1 || j === N - 1;

export const viewIsNotBlocked = (row: number[], i: number) =>
  Math.max(...row.slice(0, i)) < row[i] ||
  Math.max(...row.slice(i + 1)) < row[i];

export const calculateViewDistance = (row: number[], i: number) => {
  let right = row.slice(i + 1).findIndex((x) => x >= row[i]);
  right = right === -1 ? row.length - i - 1 : right + 1;
  let left = row
    .slice(0, i)
    .reverse()
    .findIndex((x) => x >= row[i]);
  left = left === -1 ? i : left + 1;
  return [left, right];
};

export const calculateScenicScore = (arr: number[]) =>
  arr.reduce((acc, curr) => acc * curr, 1);
