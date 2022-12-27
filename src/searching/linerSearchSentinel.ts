/**
 * 配列 a の先頭 n 個の要素から key と一致する最初の要素を線形探索する（番兵法）
 */
export const linerSearchSentinal = (
  a: number[],
  n: number,
  key: number
): number => {
  let i = 0;
  // 番兵を末尾に追加する
  a.push(key);
  while (true) {
    if (a[i] === key) {
      break;
    }
    i++;
  }
  // 本来のデータか番兵か判断して返却する
  return i === n ? -1 : i;
};
