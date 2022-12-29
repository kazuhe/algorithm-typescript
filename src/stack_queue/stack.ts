/**
 * スタック
 */
export const stack = (stack: number[], max: number) => {
  // スタックの容量
  const capacity = max;
  // スタックポインタ（スタックに積まれているデータの個数）
  let pointer = 0;

  // スタックにプッシュする
  const push = (x: number) => {
    // スタックが満杯な場合
    if (pointer >= capacity) {
      throw new Error("Overflow stack");
    }
    return (stack[pointer++] = x);
  };

  // スタックをポップする
  const pop = () => {
    // スタックが空の場合
    if (pointer <= 0) {
      throw new Error("Enpty stack");
    }
    return stack[--pointer];
  };

  // スタックを探索する
  const indexOf = (x: number) => {
    for (let i = pointer - 1; i >= 0; i--) {
      if (stack[i] === x) return i;
    }
    return -1;
  };

  return {
    push,
    pop,
    indexOf,
  };
};
