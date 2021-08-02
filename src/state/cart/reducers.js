import * as types from './types'
import {
  filterCartItem,
  getCartItem,
  sortCartItems,
  checkExistItem,
} from './selectors'

const initialState = {
  cart: [],
}
/**
 * Reducer では、受け取ったアクションから
 * アプリケーションの状態をどう変更するかを決定して、新しい状態を返します。
 * @param state
 * @param actions
 * @return {{cart: []}}
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      // アクションから渡ってきたID,名前、値段を取得
      const { id, name, price } = action.payload
      // 新しい状態を定義する配列を用意
      let newCart = []
      // すでにカートに存在しているアイテムかどうかを確認
      const isExistItem = checkExistItem(state.cart, id)
      // すでにカート内に存在している商品であれば
      if (isExistItem) {
        // ステートの同じIDの商品を抽出
        const newItem = getCartItem(state.cart, id)
        // 値段を増やす
        const newItemStock = newItem.stock + 1
        // 合計金額を増やす
        const newItemTotalPrice = newItem.price * (newItem.stock + 1)
        // 既存のステートから同じ商品IDのアイテムを一度除外する
        const filteredCartItem = filterCartItem(state.cart, id)
        // 新たに書き足す
        newCart = sortCartItems([
          ...filteredCartItem,
          {
            ...newItem,
            stock: newItemStock,
            totalPrice: newItemTotalPrice,
          },
        ])
      } else {
        // 一度も追加されたことのない商品であれば、
        // 新しくオブジェクトを追加する
        newCart = sortCartItems([
          ...state.cart,
          {
            id: id,
            name: name,
            price: price,
            stock: 1,
            totalPrice: price,
          },
        ])
      }
      // 新しい状態を作ります
      return {
        ...state,
        cart: newCart,
      }
    default:
      return state
  }
}

export default reducer
