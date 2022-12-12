import { asciiDistance } from "../../utils";

type Node = {
  id: string;
  coordinates: [number, number];
  distance: number;
  elevation: string;
  isStartNode?: boolean;
  isEndNode?: boolean;
};

type Direction = "asc" | "desc";

export class HeightMap {
  private grid: Node[][];
  private direction: Direction;

  private findStartNode(): Node {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j].isStartNode) {
          return this.grid[i][j];
        }
      }
    }
  }

  private getNeighbors(currentNode: Node, visited: Set<string>): Node[] {
    const [i, j] = currentNode.coordinates;
    return [
      this.grid[i - 1]?.[j],
      this.grid[i + 1]?.[j],
      this.grid[i]?.[j - 1],
      this.grid[i]?.[j + 1],
    ]
      .filter(Boolean)
      .filter(
        (node) =>
          !visited.has(node.id) &&
          (this.direction === "asc"
            ? asciiDistance(node.elevation, currentNode.elevation) <= 1
            : asciiDistance(currentNode.elevation, node.elevation) <= 1)
      )
      .map((node) => ({ ...node, distance: currentNode.distance + 1 }));
  }

  constructor(
    grid: string[][],
    start: string,
    end: string,
    direction: Direction
  ) {
    this.direction = direction;
    this.grid = grid.map((row, i) =>
      row.map((column, j) => ({
        id: `${i}-${j}`,
        coordinates: [i, j],
        distance: column === start ? 0 : Number.POSITIVE_INFINITY,
        elevation:
          column === start
            ? this.direction === "asc"
              ? "a"
              : "z"
            : column === end
            ? this.direction === "asc"
              ? "z"
              : "a"
            : column,
        isStartNode: column === start,
        isEndNode:
          this.direction === "desc"
            ? column === end || column === "a"
            : column === end,
      }))
    );
  }

  getShortestPath(): number {
    const start: Node = this.findStartNode();
    const queue: Node[] = [start];
    const visited: Set<string> = new Set();
    let current: Node = queue.shift();
    visited.add(current.id);
    while (!current.isEndNode) {
      const neighbors = this.getNeighbors(current, visited);
      neighbors.forEach((neighbor) => visited.add(neighbor.id));
      queue.push(...neighbors);
      queue.sort((a, b) => a.distance - b.distance);
      current = queue.shift();
    }
    return current.distance;
  }
}
