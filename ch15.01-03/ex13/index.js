// 1. nav 要素内のリンク (`<a>`)
const a = document.querySelector("nav a");
console.log("1:", a); // => <a href="#home">ホーム</a>

// 2. 商品リスト (.product-list) 内の最初の商品 (.product-item)
const product = document.querySelector(
  ".product-list .product-item:first-child"
);
console.log("2:", product);
/**
 =>
    <div class="product-item">
      <img src="./200" alt="商品1" />
      <h3>商品1</h3>
      <p>高品質の家電製品です。</p>
      <p class="price">¥12,000</p>
      <button>カートに追加</button>
    </div>
 */

// 3. カートアイコンの画像 (`<img>`)
const img = document.querySelector(".cart img");
console.log("3:", img); // => <img src="./30" alt="カート" />

// 4. 商品リスト (.product-list) 内の価格 (.price) を表示する要素
const price = document.querySelector(".product-list .price");
console.log("4:", price); // => <p class="price">¥12,000</p>

// 5. 商品リスト (.product-list) 内の全ての商品 (.product-item) の画像 (`<img>`)
const allProductItemImg = document.querySelectorAll(
  ".product-list .product-item img"
);
console.log("5:", allProductItemImg); // => img4つのリスト

// 6. 検索バー (.search-bar) 内の検索ボタン (`<button>`)
const button = document.querySelector(".search-bar button");
console.log("6:", button); // => <button>検索</button>

// 7. フッター (footer) 内のパラグラフ (`<p>`) 要素
const footer = document.querySelector("footer p");
console.log("7:", footer); // => <p>© 2024 家電オンラインショップ. All rights reserved.</p>

// 8. 商品リスト (.product-list) 内の偶数番目の商品 (.product-item)
const evenProducts = document.querySelectorAll(
  ".product-list .product-item:nth-child(even)"
);
console.log("8:", evenProducts); // => div.product-item 2つのリスト

// 9. ヘッダー (header) 内のアカウントリンク (.account) の画像 (`<img>`)
const accountImg = document.querySelector(".account img");
console.log("9:", accountImg); // => <img src="./30" alt="アカウント" />

// 10. ナビゲーションリンクのうち、"会社情報" のリンク
const link = document.querySelector('nav [href="#about"]');
console.log("10:", link); // => <a href="#about">会社情報</a>
