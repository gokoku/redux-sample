import React from 'react'
import { useSelector } from 'react-redux'

/**
 * カートの中身を表示するコンポーネントです
 */

export const Cart = () => {
  // カートの状態を Reducer から取得
  const cartItems = useSelector((state) => state.cart)
  // カートの合計金額を表示
  const totalPrices = cartItems
    .map((item) => item.totalPrice)
    .reduce((pv, cv) => pv + cv, 0)
  if (cartItems.length === 0) {
    return <div className='cart'>カートにアイテムはありません。</div>
  }
  const cart = cartItems.map((item) => (
    <div className='cart_item' key={item.id}>
      <div className='cart_block'>
        <p className='cart_itemName'>{item.name}</p>
        <p className='cart_price'>{item.price} 円</p>
      </div>
      <p className='cart_stock'>{item.stock} 個</p>
    </div>
  ))
  return (
    <div className='cart'>
      <p className='cart_title'>カートの中身</p>
      <div>{cart}</div>
      <div className='cart_total'>合計金額: {totalPrices} 円</div>
    </div>
  )
}
