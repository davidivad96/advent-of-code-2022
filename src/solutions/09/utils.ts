import { Direction, Position } from "./types";

export class Rope {
  head: Position;
  tail: Rope;
  visited: Set<string>;

  constructor(length: number) {
    this.head = { x: 0, y: 0 };
    this.tail = length > 1 ? new Rope(length - 1) : null;
    this.visited = new Set([JSON.stringify(this.head)]);
  }

  private chebyshevDistance(a: Position, b: Position) {
    return Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y));
  }

  private addVisited() {
    this.visited.add(JSON.stringify(this.head));
  }

  getLastTail() {
    return this.tail ? this.tail.getLastTail() : this;
  }

  move(direction: Direction, distance: number) {
    switch (direction) {
      case Direction.Up:
        for (let i = 0; i < distance; i++) {
          this.head.y++;
          this.addVisited();
          if (
            this.tail &&
            this.chebyshevDistance(this.head, this.tail.head) >= 2
          ) {
            this.tail.move(
              this.head.x === this.tail.head.x
                ? Direction.Up
                : this.head.x > this.tail.head.x
                ? Direction.UpRight
                : Direction.UpLeft,
              1
            );
          }
        }
        break;
      case Direction.Down:
        for (let i = 0; i < distance; i++) {
          this.head.y--;
          this.addVisited();
          if (
            this.tail &&
            this.chebyshevDistance(this.head, this.tail.head) >= 2
          ) {
            this.tail.move(
              this.head.x === this.tail.head.x
                ? Direction.Down
                : this.head.x > this.tail.head.x
                ? Direction.DownRight
                : Direction.DownLeft,
              1
            );
          }
        }
        break;
      case Direction.Right:
        for (let i = 0; i < distance; i++) {
          this.head.x++;
          this.addVisited();
          if (
            this.tail &&
            this.chebyshevDistance(this.head, this.tail.head) >= 2
          ) {
            this.tail.move(
              this.head.y === this.tail.head.y
                ? Direction.Right
                : this.head.y > this.tail.head.y
                ? Direction.UpRight
                : Direction.DownRight,
              1
            );
          }
        }
        break;
      case Direction.Left:
        for (let i = 0; i < distance; i++) {
          this.head.x--;
          this.addVisited();
          if (
            this.tail &&
            this.chebyshevDistance(this.head, this.tail.head) >= 2
          ) {
            this.tail.move(
              this.head.y === this.tail.head.y
                ? Direction.Left
                : this.head.y > this.tail.head.y
                ? Direction.UpLeft
                : Direction.DownLeft,
              1
            );
          }
        }
        break;
      case Direction.UpRight:
        this.head.x++;
        this.head.y++;
        this.addVisited();
        if (
          this.tail &&
          this.chebyshevDistance(this.head, this.tail.head) >= 2
        ) {
          this.tail.move(
            this.head.x === this.tail.head.x
              ? Direction.Up
              : this.head.y === this.tail.head.y
              ? Direction.Right
              : Direction.UpRight,
            1
          );
        }
        break;
      case Direction.UpLeft:
        this.head.x--;
        this.head.y++;
        this.addVisited();
        if (
          this.tail &&
          this.chebyshevDistance(this.head, this.tail.head) >= 2
        ) {
          this.tail.move(
            this.head.x === this.tail.head.x
              ? Direction.Up
              : this.head.y === this.tail.head.y
              ? Direction.Left
              : Direction.UpLeft,
            1
          );
        }
        break;
      case Direction.DownRight:
        this.head.x++;
        this.head.y--;
        this.addVisited();
        if (
          this.tail &&
          this.chebyshevDistance(this.head, this.tail.head) >= 2
        ) {
          this.tail.move(
            this.head.x === this.tail.head.x
              ? Direction.Down
              : this.head.y === this.tail.head.y
              ? Direction.Right
              : Direction.DownRight,
            1
          );
        }
        break;
      case Direction.DownLeft:
        this.head.x--;
        this.head.y--;
        this.addVisited();
        if (
          this.tail &&
          this.chebyshevDistance(this.head, this.tail.head) >= 2
        ) {
          this.tail.move(
            this.head.x === this.tail.head.x
              ? Direction.Down
              : this.head.y === this.tail.head.y
              ? Direction.Left
              : Direction.DownLeft,
            1
          );
        }
        break;
    }
  }
}
