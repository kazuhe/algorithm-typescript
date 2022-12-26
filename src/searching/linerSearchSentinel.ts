/**
 * 配列 a の先頭 n 個の要素から key と一致する最初の要素を線形探索する（番兵法）
 */
const linerSearchSentinal = (a: number[], n: number, key: number): number => {
  let i = 0;
  // 番兵を追加する\
  while (true) {
    if (a[i] === key) {
      break;
    }
    i++;
  }
  // 本来のデータか番兵か判断して返却する
  return i === n ? -1 : i;
};

const array = [6, 4, 3, 2, 1, 2, 8];
const num = 7;
const key = 2; // key 値

const result = linerSearchSentinal(array, num, key);

if (result === -1) {
  console.log("その値の要素は存在しません");
} else {
  console.log(`その値は x[${result}] にありました`);
}

export {};
