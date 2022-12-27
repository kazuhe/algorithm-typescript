/**
 * 配列 a の先頭 n 個の要素から key と一致する最初の要素を線形探索する
 */
export const linerSearch = (a: number[], n: number, key: number): number => {
  for (let i = 0; i < n; i++) {
    if (a[i] === key) return i;
  }
  return -1;
};
