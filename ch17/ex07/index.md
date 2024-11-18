## 問題
TypeScriptのトランスパイルは`@babel/preset-typescript`や`tsc`によって可能だが、それぞれの違いを調べなさい。

## 回答
- @babel/preset-typescript  
ECMA2015(ES6)以降をサポートしている。  
型チェックを行わない分、トランスパイルの速度が早い。
型チェックにはFlowやTypeScriptを使用することが推奨されている。

- tsc  
TypeScriptの開発チームが提供しているトランスパイラ。  
ES3以降をサポートしている。
型チェックを行う分、トランスパイルの速度がやや遅い。