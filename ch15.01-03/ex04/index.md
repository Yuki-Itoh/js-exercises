## 問題

グローバルオブジェクトを参照する方法を、ブラウザ内、node内、ブラウザnode問わずの３種記しなさい。<br>
また、ブラウザとnodeのグローバルオブジェクトのプロパティやメソッドを比較し、ブラウザ独自のものを10程度記しなさい。<br>
最後に、グローバルオブジェクトにundefinedが定義されていることを確認し、過去のES仕様でどのような問題が発生していたかを記しなさい。

## 回答

- グローバルオブジェクトを参照する方法  
  グローバルオブジェクトに以下のプロパティが用意されており、これらのプロパティにはグローバルオブジェクトそのものが格納されている。

  - global (node内)
  - window (ブラウザ内)
  - globalThis (ブラウザnode問わず)

- ブラウザ独自のもの

  - alert() https://developer.mozilla.org/ja/docs/Web/API/Window/alert  
    globalにプロパティからもalert()にアクセスできるが、仕様上はWeb/API/Windowのページに記載がある。

- グローバル変数undefinedの問題
  - ex04/ch08と類似の問題。
  - グローバル変数`undefined`は値の代入が可能であったため、`undefined`が`undefined`である保証がなかった。そのため`void 0`が代わりに使用されていた。しかし、Javascript 1.8.5(2015年)以降はグローバル変数が読み取り専用となったため、`undefined`を安全に使用できるようになった。
