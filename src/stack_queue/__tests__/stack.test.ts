import { describe, test, expect } from "vitest";
import { stack } from "../stack";

describe("stack", () => {
  test("スタックにデータをプッシュできること", () => {
    const numberStack: number[] = [];
    const { push } = stack(numberStack, 3);

    expect(numberStack).toEqual([]);
    expect(push(3)).toEqual(3);
    expect(push(5)).toEqual(5);
    expect(numberStack).toEqual([3, 5]);
  });

  test("スタックが満杯の場合、エラーをスローすること", () => {
    const numberStack: number[] = [];
    const { push } = stack(numberStack, 3);

    push(3);
    push(5);
    push(7);
    expect(() => push(11)).toThrowError("Overflow stack");
  });

  test("スタックからポップできること", () => {
    const numberStack: number[] = [];
    const { push, pop } = stack(numberStack, 3);

    push(3);
    push(5);
    expect(pop()).toBe(5);
    expect(pop()).toBe(3);
  });

  test("スタックが空の場合、エラーをスローすること", () => {
    const numberStack: number[] = [];
    const { push, pop } = stack(numberStack, 3);

    push(3);
    push(5);
    expect(pop()).toBe(5);
    expect(pop()).toBe(3);
    expect(() => pop()).toThrowError("Enpty stack");
  });

  test("スタックを探索するとインデックスを返すこと", () => {
    const numberStack: number[] = [];
    const { push, indexOf } = stack(numberStack, 5);

    push(3);
    push(5);
    push(7);
    push(11);
    expect(indexOf(7)).toBe(2);
  });

  test("スタックの探索に失敗すると -1 を返すこと", () => {
    const numberStack: number[] = [];
    const { push, indexOf } = stack(numberStack, 5);

    push(3);
    push(5);
    push(7);
    push(11);
    expect(indexOf(6)).toBe(-1);
  });
});
