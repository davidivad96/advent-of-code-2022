export const sumArray = (arr: number[]) =>
  arr.reduce((acc, curr) => acc + curr, 0);

export const isUpper = (text: string) => text === text.toUpperCase();

export const transpose2DArray = (arr: any[][]) =>
  arr[0].map((_, colIndex) => arr.map((row) => row[colIndex]));

export const asciiDistance = (a: string, b: string) =>
  a.charCodeAt(0) - b.charCodeAt(0);
