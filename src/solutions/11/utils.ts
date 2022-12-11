type Operation = {
  operator: "+" | "*";
  value1: number | "old";
  value2: number | "old";
};

type Action = {
  toMonkey: number;
  item?: number;
};

type Test = {
  divisibleBy: number;
  actionIfTrue: Action;
  actionIfFalse: Action;
};

export class Monkey {
  items: number[];
  operation: Operation;
  test: Test;
  nItemsInspected: number = 0;
  static modulo: number;

  private static buildOperation(operation: string): Operation {
    const [value1, operator, value2] = operation.split(" ");
    return {
      operator: operator as "+" | "*",
      value1: value1 === "old" ? value1 : Number(value1),
      value2: value2 === "old" ? value2 : Number(value2),
    };
  }

  private static buildTest(test: number[]): Test {
    const [divisibleBy, actionIfTrue, actionIfFalse] = test;
    return {
      divisibleBy,
      actionIfTrue: {
        toMonkey: actionIfTrue,
      },
      actionIfFalse: {
        toMonkey: actionIfFalse,
      },
    };
  }

  constructor(items: number[], operation: string, test: number[]) {
    this.items = items;
    this.operation = Monkey.buildOperation(operation);
    this.test = Monkey.buildTest(test);
  }

  private calculateWorryLevel(
    item: number,
    divideByThree: boolean = true
  ): number {
    const { operator, value1, value2 } = this.operation;
    const value1ToUse = value1 === "old" ? item : value1;
    const value2ToUse = value2 === "old" ? item : value2;
    const divideBy = divideByThree ? 3 : 1;
    switch (operator) {
      case "+":
        return (
          Math.floor((value1ToUse + value2ToUse) / divideBy) % Monkey.modulo
        );
      case "*":
        return (
          Math.floor((value1ToUse * value2ToUse) / divideBy) % Monkey.modulo
        );
    }
  }

  private testWorryLevel(worryLevel: number): Action {
    const { divisibleBy, actionIfTrue, actionIfFalse } = this.test;
    return worryLevel % divisibleBy === 0
      ? { ...actionIfTrue, item: worryLevel }
      : { ...actionIfFalse, item: worryLevel };
  }

  processItems(divideByThree: boolean = true): Action[] {
    const actions: Action[] = [];
    while (this.items.length) {
      const item = this.items.shift();
      const worryLevel = this.calculateWorryLevel(item, divideByThree);
      const action = this.testWorryLevel(worryLevel);
      actions.push(action);
      this.nItemsInspected++;
    }
    return actions;
  }

  receiveAction(action: Action): void {
    this.items.push(action.item);
  }
}
