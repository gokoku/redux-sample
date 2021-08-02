// operations ではアクションを発行する前に実行したい、複雑な処理を記述します。
// 例えば、外部API通信やDBとの接続などです。
// 今回のケースでは外部通信などはないため、アクションをそのまま渡してます。

import { addToCart, clearCart } from './actions'

export { addToCart, clearCart }
