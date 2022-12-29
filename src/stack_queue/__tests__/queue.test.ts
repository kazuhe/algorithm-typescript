import { describe, test, expect } from "vitest";
import { queue } from "../queue";

describe("queue", () => {
  test("キューにデータをエンキューできること", () => {
    const numberQueue: number[] = [];
    const { enque } = queue(numberQueue, 3);

    expect(numberQueue).toEqual([]);
    expect(enque(3)).toEqual(3);
    expect(enque(5)).toEqual(5);
    expect(numberQueue).toEqual([3, 5]);
  });

  test("キューが満杯の場合、エラーをスローすること", () => {
    const numberQueue: number[] = [];
    const { enque } = queue(numberQueue, 3);

    enque(3);
    enque(5);
    enque(7);
    expect(() => enque(11)).toThrowError("Overflow queue");
  });

  test("キューからデキューできること", () => {
    const numberQueue: number[] = [];
    const { enque, deque } = queue(numberQueue, 3);

    enque(3);
    enque(5);
    expect(deque()).toBe(3);
    expect(deque()).toBe(5);
  });

  test("キューが空の場合、エラーをスローすること", () => {
    const numberQueue: number[] = [];
    const { enque, deque } = queue(numberQueue, 3);

    enque(3);
    enque(5);
    expect(deque()).toBe(3);
    expect(deque()).toBe(5);
    expect(() => deque()).toThrowError("Empty queue");
  });

  test("キューがリングバッファ構造になっていること", () => {
    const numberQueue: number[] = [];
    const { enque, deque } = queue(numberQueue, 3);

    enque(3);
    enque(5);
    enque(7);
    expect(numberQueue).toEqual([3, 5, 7]);

    deque();
    enque(11);
    expect(numberQueue).toEqual([11, 5, 7]);
  });

  test("キューを探索するとインデックスを返すこと", () => {
    const numberQueue: number[] = [];
    const { enque, deque, indexOf } = queue(numberQueue, 3);

    enque(3);
    enque(5);
    enque(7);
    deque();
    enque(11);

    expect(indexOf(7)).toBe(2);
    expect(indexOf(11)).toBe(0);
  });

  test("キューの探索に失敗すると -1 を返すこと", () => {
    const numberQueue: number[] = [];
    const { enque, deque, indexOf } = queue(numberQueue, 3);

    enque(3);
    enque(5);
    enque(7);
    deque();
    enque(11);

    expect(indexOf(7)).toBe(2);
    expect(indexOf(11)).toBe(0);
    expect(indexOf(6)).toBe(-1);
  });
});
