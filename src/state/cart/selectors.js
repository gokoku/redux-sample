// selector では、ストアで管理している状態を参照する関数を定義します。

/**
 * 指定したIDのカート商品を検索して返します。
 * @param cart
 * @param id
 */
export const getCartItem = (cart, id) => {
  return cart.find((item) => item.id === id)
}

/**
 * 指定したIDのカート商品を除外して返します。
 * @param cart
 * @param id
 */
export const filterCartItem = (cart, id) => {
  return cart.filter((item) => item.id !== id)
}

/**
 * データをIDの昇順にして返します
 * @param cart
 */
export const sortCartItems = (cart) => {
  return cart.slice().sort((a, b) => {
    // データが追加順になってしまうので、並び替え
    return a.id - b.id
  })
}

/**
 * すでにカートに存在しているか商品かどうかを判別して、真偽値を返します。
 * @param cart
 */
export const checkExistItem = (cart, id) => {
  return cart.some((item) => item.id === id)
}
