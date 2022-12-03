export const sumArray = (arr: number[]) =>
  arr.reduce((acc, curr) => acc + curr, 0);

export const isUpper = (text: string) => text === text.toUpperCase();
