/**
 * ハッシュを構成するノード
 */
export type Node<T> = {
  key: number; // キー値
  data: T; // データ
  next?: Node<T>; // 後続ノードへの参照
};

/**
 * ノードを作成する
 */
type CreateNode = <T>(key: number, data: T, next: Node<T>) => Node<T>;

/**
 * ハッシュ表から要素を探索する
 */
type Search<T> = (key: number) => T | undefined;

/**
 * ハッシュ表に要素を追加する
 */
type Add<T> = (key: number, data: T) => boolean;

/**
 * チェイン法によるハッシュ
 *
 * @param table ハッシュ表
 * @param random ハッシュ値を作成に用いる数字(素数が好ましい)
 */
export const chainHash = <T>(table: Node<T>[], random: number) => {
  // ハッシュ値を求める
  const hashValue = (key: number): number => key % random;

  const createNode: CreateNode = (key, data, next) => ({
    key,
    data,
    next,
  });

  const search: Search<T> = (key) => {
    const hash = hashValue(key); // 探索するデータのハッシュ値
    let p: Node<T> | undefined = table[hash]; // 着目ノード
    while (p !== undefined) {
      // 線形リストを走査する
      if (p.key === key) return p.data; // 登録済みの場合
      p = p.next; // 後続ノードに着目する
    }
    return undefined; // 探索失敗
  };

  const add: Add<T> = (key, data) => {
    const hash = hashValue(key);
    let p: Node<T> | undefined = table[hash];
    while (p !== undefined) {
      if (p.key === key) return false;
      p = p.next;
    }
    table[hash] = createNode(key, data, table[hash]); // ノードを挿入する
    return true;
  };

  return {
    search,
    add,
  };
};
