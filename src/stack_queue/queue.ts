/**
 * キュー
 */
export const queue = (queue: number[], max: number) => {
  // キューの容量
  const capacity = max;
  // 先頭要素のカーソル
  let front = 0;
  // 末尾要素のカーソル
  let rear = 0;
  // 現在のデータ数（front と rear の値が等しくなった場合に、
  // キューが空なのか満杯なのか区別するために必要）
  let num = 0;

  // キューにエンキューする
  const enque = (x: number) => {
    // キューが満杯の場合
    if (num >= capacity) {
      throw new Error("Overflow queue");
    }
    queue[rear++] = x;
    num++;
    if (rear === capacity) {
      // rear をこれ以上インクリメントできない場合、
      // 配列の先頭のインデックスに戻す
      rear = 0;
    }
    return x;
  };

  // キューからデキューする
  const deque = () => {
    // キューが空の場合
    if (num <= 0) {
      throw new Error("Empty queue");
    }
    const x = queue[front++];
    num--;
    if (front === capacity) {
      front = 0;
    }
    return x;
  };

  // キューを探索する
  const indexOf = (x: number) => {
    for (let i = 0; i < capacity; i++) {
      // 論理的先頭要素から論理的末尾要素へと線形探索をする
      const idx = (i + front) % capacity;
      if (queue[idx] === x) return idx; // 探索成功
    }
    return -1; // 探索失敗
  };

  return { enque, deque, indexOf };
};
