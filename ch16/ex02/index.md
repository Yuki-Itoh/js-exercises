## 問題

また、主にクラウド上で動作するプログラムは、いわゆる Graceful Shutdown という動作が求められ、上記のような処理が必要な場合がある。Kubernetes や Amazon ECS などの Docker ランタイム上でコンテナの Graceful Shutdown のために送信されるシグナルの種類は何か書きなさい。

## 回答

SIGTERMが送信されてから数秒後にSIGKILLが送信される。

- SIGTERM：終了要求
- SIGKILL：強制終了

**参考** https://qiita.com/suin/items/122946f7d0cd13b143f9
