import { describe, test, expect } from "vitest";
import { Node, chainHash } from "../chainHash";

/**
 * サンプルデータ型
 */
type Data = {
  name: string;
};

describe("chainHash", () => {
  test("ハッシュ表へデータが挿入されていること", () => {
    const table: Node<Data>[] = [];
    const { search, add } = chainHash(table, 13);

    // 15 % 13 = 2 なので、インデックス 3 へ挿入される
    add(15, { name: "十五" });

    expect(table).toEqual([
      undefined,
      undefined,
      {
        key: 15,
        data: { name: "十五" },
        next: undefined,
      },
    ]);
    expect(search(15)).toEqual({ name: "十五" });
  });

  test("バケットが衝突した場合、線形リストの先頭へデータが挿入されていること", () => {
    const table: Node<Data>[] = [];
    const { search, add } = chainHash(table, 13);

    // 15 % 13 = 2 なので、インデックス 3 へ挿入される
    add(15, { name: "十五" });
    // 28 % 13 = 2 なので、インデックス 3 へ挿入される
    add(28, { name: "二十八" });

    expect(table).toEqual([
      undefined,
      undefined,
      {
        key: 28,
        data: { name: "二十八" },
        next: {
          key: 15,
          data: { name: "十五" },
          next: undefined,
        },
      },
    ]);
    expect(search(15)).toEqual({ name: "十五" });
    expect(search(28)).toEqual({ name: "二十八" });
  });

  test("すでに登録されているキー値の場合、false が返され table に変化がないこと", () => {
    const table: Node<Data>[] = [];
    const { add } = chainHash(table, 13);

    // 15 % 13 = 2 なので、インデックス 3 へ挿入される
    add(15, { name: "十五" });

    expect(add(15, { name: "二十八" })).toBe(false);
    expect(table).toEqual([
      undefined,
      undefined,
      {
        key: 15,
        data: { name: "十五" },
        next: undefined,
      },
    ]);
  });

  test("対象要素が存在しない場合、undefined が返されること", () => {
    const table: Node<Data>[] = [];
    const { search, add } = chainHash(table, 13);

    // 15 % 13 = 2 なので、インデックス 3 へ挿入される
    add(15, { name: "十五" });
    // 17 % 13 = 4 なので、インデックス 5 へ挿入される
    add(17, { name: "十七" });

    expect(table).toEqual([
      undefined,
      undefined,
      {
        key: 15,
        data: { name: "十五" },
        next: undefined,
      },
      undefined,
      {
        key: 17,
        data: { name: "十七" },
        next: undefined,
      },
    ]);
    expect(search(16)).toBeUndefined();
  });
});
