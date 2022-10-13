import { createOperation, createValue } from ".";

export const happyPathTreeFloatReturn = createOperation(
  "÷",
  createValue(23),
  createValue(4)
);

export const happyPathTreeFloatParams = createOperation(
  "x",
  createValue(8.75),
  createValue(3.45)
);

export const happyPathTree1Case = createOperation(
  "-",
  createValue(6),
  createValue(7)
);

export const happyPathTree2Case = createOperation(
  "+",
  createOperation("x", createValue(3), createValue(5)),
  createOperation("÷", createValue(28), createValue(4))
);

export const happyPathTreeN1Case = createOperation(
  "÷",
  createOperation(
    "+",
    createValue(7),
    createOperation(
      "x",
      createOperation("-", createValue(3), createValue(2)),
      createValue(5)
    )
  ),
  createValue(6)
);

export const errorOperatorTree = () =>
  createOperation("$" as any, createValue(2), createValue(6));
