import {
  errorOperatorTree,
  happyPathTree1Case,
  happyPathTree2Case,
  happyPathTreeFloatParams,
  happyPathTreeFloatReturn,
  happyPathTreeN1Case,
} from "./mocks";

describe("Expression tree", () => {
  describe("error case", () => {
    it("should throw error when expression is empty", () => {
      expect(() => errorOperatorTree()).toThrowError("Invalid operator");
    });
  });
  describe("float cases", () => {
    it("should return 5.75 result and correct operation string with float return", () => {
      expect(happyPathTreeFloatReturn.result()).toBe(5.75);
      expect(happyPathTreeFloatReturn.toString()).toBe("(23 ÷ 4)");
    });
    it("should return 5.75 result and correct operation string with float input", () => {
      expect(happyPathTreeFloatParams.result()).toBe(30.1875);
      expect(happyPathTreeFloatParams.toString()).toBe("(8.75 x 3.45)");
    });
  });
  describe("happy path", () => {
    it("should return -1 and correct operation string for base case", () => {
      expect(happyPathTree1Case.result()).toBe(-1);
      expect(happyPathTree1Case.toString()).toBe("(6 - 7)");
    });
    it("should return 22 and correct operation string for case 2", () => {
      expect(happyPathTree2Case.result()).toBe(22);
      expect(happyPathTree2Case.toString()).toBe("((3 x 5) + (28 ÷ 4))");
    });
    it("should return 2 and correct operation string for case N+1", () => {
      expect(happyPathTreeN1Case.result()).toBe(2);
      expect(happyPathTreeN1Case.toString()).toBe("((7 + ((3 - 2) x 5)) ÷ 6)");
    });
  });
});
