## 問題

1. プログラミング言語や処理系によっては、再帰呼び出しを関数の処理の末尾にする(末尾再帰)ことで、スタックオーバーフローが起こらないよう最適化できるものがある。末尾再帰は何故そのような最適化ができるのか答えなさい。

2. JavaScript で末尾再帰最適化を実装している処理系を答えなさい。  
   利用できる環境があれば、実際に以下の URL を表示・実行してエラーが発生しないことを確認しなさい。  
   https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABMAhtOAnGKA2AKMALkTBAFsAjAUwwEpEBvAWAChFlxp4kYoa8ADhjgATENGKlKNADSIIccHwyTy1Oo1bt2MYIjwKlNRAD4S9Zm23sMVKCAxIho8VADcW7QF9PNuw55lQWExaEQAKnlFMGU5QxjjAGpEAEZaDysfK1t7R0RefhS5NIys1gUwAGc4HCoAOhw4AHM8VHQsXDwUgAZe3tp01iA

## 回答

1. 末尾再起は機械的にループ文に変換することができるため。  
   この変換を末尾呼び出し除去(TCO: Tail Call Elimination)という。

2. JavaScriptCore(Safari)でのみ実装されている。
   V8(Chrome)やSpiderMonkey(Firefox)などでは実装されていない。
