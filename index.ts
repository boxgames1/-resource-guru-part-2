import { divide, multiply, sum, subtract } from "mathjs";

const ALLOWED_OPERATORS = ["+", "-", "x", "÷", ""];

type Operator = "+" | "-" | "x" | "÷" | "";

type NodeReturnType = {
  operator: Operator;
  value: number | null;
  left?: NodeReturnType;
  right?: NodeReturnType;
  result: () => number;
  toString: () => string;
};

const getOperation = (operator: Operator) =>
  ({
    "+": sum,
    "-": subtract,
    x: multiply,
    "÷": divide,
  }[operator]);

const Node = (
  operator: Operator,
  value: number | undefined,
  left?: NodeReturnType | undefined,
  right?: NodeReturnType | undefined
): NodeReturnType => {
  if (!ALLOWED_OPERATORS.includes(operator))
    throw new Error("Invalid operator");
  const isEmptyOperator = operator === "";
  const isEmptyAnySide = left === undefined || right === undefined;
  const returnValue = isEmptyOperator || isEmptyAnySide;
  const result = () =>
    returnValue ? value : getOperation(operator)(left.result(), right.result());

  const toString = () =>
    returnValue
      ? value.toString()
      : `(${left.toString()} ${operator} ${right.toString()})`;

  return {
    operator,
    value,
    left,
    right,
    result,
    toString,
  };
};

export const createValue = (value: number) => Node("", value);
export const createOperation = (
  operator: Operator,
  left: NodeReturnType,
  right: NodeReturnType
) => Node(operator, undefined, left, right);
