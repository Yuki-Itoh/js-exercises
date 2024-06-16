## 問題

jQuery Deferred について調べ `Promise` との関係性について説明しなさい。

## 解答

jQuery Deferredは2011年のv1.5で実装された、コールバックを使わずに非同期処理を行う機能である。
※2015年のECMAScript2015(ES6)で実装されたPromiseと似た機能。

jQuery Deferredには`Deferred`と`Promise`が定義され、Deferredを生成した時に内部でPromiseが自動生成される。DeferredとPromiseは一対一であり、DeferredがPromiseを内包する関係性である。Promiseは状態を持ち、Deferredは処理をチェーンのように繋げて書ける仕組みを持っている。
