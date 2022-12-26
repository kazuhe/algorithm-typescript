/**
 * 配列 a の先頭 n 個の要素から key と一致する最初の要素を線形探索する
 */
const linerSearch = (a: number[], n: number, key: number): number => {
  for (let i = 0; i < n; i++) {
    if (a[i] === key) return i;
  }
  return -1;
};

const array = [6, 4, 3, 2, 1, 2, 8];
const num = 7;
const key = 2; // key 値

const result = linerSearch(array, num, key);

if (result === -1) {
  console.log("その値の要素は存在しません");
} else {
  console.log(`その値は x[${result}] にありました`);
}

export {};
