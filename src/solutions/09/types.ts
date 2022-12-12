export enum Direction {
  Up = "U",
  Down = "D",
  Right = "R",
  Left = "L",
  UpRight = "UP",
  UpLeft = "UL",
  DownRight = "DR",
  DownLeft = "DL",
}

export type Motion = {
  direction: Direction;
  distance: number;
};

export type Position = {
  x: number;
  y: number;
};
