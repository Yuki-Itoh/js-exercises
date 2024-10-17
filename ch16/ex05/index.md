## 問題

1. 標準入力、標準出力、標準エラー出力、リダイレクト、パイプという単語について調べなさい
2. 以下のコードを `cat.mjs` というファイルに保存し、後述する実験の結果を予測し、実際に実験しなさい

## 回答

1.  - 標準入力
      プログラムに値を渡す入力元

    - 標準出力
      プログラムから出力される出力先

    - 標準エラー出力
      プログラムから出力されるエラーメッセージの出力先

    - リダイレクト
      標準入力/標準出力/標準エラー出力の入出力先はユーザーが指名したファイルにリダイレクトすることができる。

    - パイプ
      あるストリームからデータを読み込んだ後、別のストリームにそのデータを書き込まなければならない場合に、2つのソケットを「パイプ」として接続することができる。

2.  実験: `file` は適当なファイルとし `invalid-file` は存在しないファイルとしなさい

- `node cat.mjs`  
  予想：標準入力したものを標準出力する  
  結果：同上
- `echo FOO | node cat.mjs`  
  予想：FOOを標準出力する  
  結果：同上
- `node cat.mjs > output.txt`  
  予想：標準入力したものをoutput.txtに出力する  
  結果：同上
- `node cat.mjs file`  
  予想：fileを標準出力する  
  結果：同上
- `node cat.mjs file > output.txt`  
  予想：fileをoutput.txtに出力する  
  結果：同上
- `node cat.mjs invalid-file > output.txt`  
  予想：エラーが出る  
  結果：Error: ENOENT: no such file or directoryが標準出力された。
- `node cat.mjs invalid-file 2> error.txt`  
  予想：エラーをerror.txtに出力する  
  結果：Error: ENOENT: no such file or directoryが標準出力された。