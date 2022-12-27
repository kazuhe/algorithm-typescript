import { describe, test, expect } from "vitest";
import { linerSearchSentinal } from "../linerSearchSentinel";

describe("linerSearchSentinal", () => {
  test.each([
    [6, 0],
    [2, 3],
    [8, 6],
    [5, -1],
  ])(
    "要素が存在すれば index を返し、存在しない場合は -1 を返すこと",
    (key, expected) => {
      const array = [6, 4, 3, 2, 1, 2, 8];
      const num = 7;
      expect(linerSearchSentinal(array, num, key)).toBe(expected);
    }
  );
});
