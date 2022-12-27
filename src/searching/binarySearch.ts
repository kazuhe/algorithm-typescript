/**
 * 配列 a の先頭 n 個の要素から key と一致する最初の要素を 2 分探索する
 */
export const binarySearch = (a: number[], n: number, key: number): number => {
  // 探索範囲の先頭のインデックス
  let pl = 0;
  // 末尾のインデックス
  let pr = n - 1;

  do {
    // 中央要素のインデックス
    let pc = (pl + pr) / 2;

    // 探索成功
    if (a[pc] === key) {
      return pc;
    } else if (a[pc] < key) {
      // 探索範囲の後半に絞り込む
      pl = pc + 1;
    } else {
      // 探索範囲の前半に絞り込む
      pr = pc - 1;
    }
  } while (pl <= pr);

  // 探索失敗
  return -1;
};
