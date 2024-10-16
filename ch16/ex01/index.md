## 問題

用語「マルチスレッド」について調べなさい。

次にフィボナッチ数を計算するmFib.jsをスレッド数を変更しながら実行し(*1)、
コンソール出力とOS機能(*2)で結果とスレッド数を確認しなさい。

最後にあなたのPCのCPUスペックを調査し、適切なスレッド数についての考察を記しなさい。

## 回答

マルチスレッドとは、1つのプロセスを複数のスレッドに分割し、独立して動作させること。

PCのスペック：
プロセッサ：11th Gen Intel(R) Core(TM) i7-1185G7 @ 3.00GHz 1.80 GHz
→コア数4、スレッド総数8
スレッド数は8に抑えた方がパフォーマンスが良かった。

> node .\ch16\ex01\mFib.js 50 10
> Worker 8 execution time: 2.547s
> Worker 5 execution time: 3.901s
> Worker 1 execution time: 5.808s
> Worker 2 execution time: 9.515s
> Worker 7 execution time: 14.549s
> Worker 0 execution time: 22.305s
> Worker 4 execution time: 37.243s
> Worker 9 execution time: 56.902s
> Worker 3 execution time: 1:25.849 (m:ss.mmm)
> Worker 6 execution time: 2:03.260 (m:ss.mmm)
> Total execution time: 2:03.270 (m:ss.mmm)
> Fibonacci number: 20365011073

> node .\ch16\ex01\mFib.js 50 8
> Worker 6 execution time: 4.616s
> Worker 5 execution time: 7.325s
> Worker 0 execution time: 13.604s
> Worker 3 execution time: 22.440s
> Worker 4 execution time: 34.759s
> Worker 1 execution time: 51.464s
> Worker 7 execution time: 1:20.634 (m:ss.mmm)
> Worker 2 execution time: 1:56.931 (m:ss.mmm)
> Total execution time: 1:56.938 (m:ss.mmm)
> Fibonacci number: 20365011073
