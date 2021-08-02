// actions では、アプリケーションから受け取った
// 状態変更依頼を受け取り、reducers に渡します。

import * as types from './types'

/**
 * カートに商品を追加するアクションです。
 * @params id
 * @params name
 * @params price
 * @return {{payload: {price, name, id}, type: string}}
 */

export const addToCart = (id, name, price) => ({
  type: types.ADD_ITEM,
  payload: {
    id,
    name,
    price,
  },
})

/**
 * カートの中身をリセットするアクションです。
 * @return {{type: string}}
 */
export const clearCart = () => ({
  type: types.CLEAR,
})
