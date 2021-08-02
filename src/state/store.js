import { createStore, compose } from 'redux'
import cartReducer from './cart'

/**
 * Redux のストアを作成する関数
 * @return {Store<unknown>}
 */

export const configureStore = () => {
  return createStore(
    cartReducer,
    compose(
      process.env.NODE_ENV === 'development' &&
        window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f,
    ),
  )
}
