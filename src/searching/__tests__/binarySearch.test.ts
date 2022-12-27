import { describe, test, expect } from "vitest";
import { binarySearch } from "../binarySearch";

describe("binarySearch", () => {
  test.each([
    [15, 0],
    [39, 2],
    [77, 3],
    [108, 5],
    [121, 6],
    [95, -1],
  ])(
    "要素が存在すれば index を返し、存在しない場合は -1 を返すこと",
    (key, expected) => {
      const array = [15, 27, 39, 77, 92, 108, 121];
      const num = 7;
      expect(binarySearch(array, num, key)).toBe(expected);
    }
  );
});
