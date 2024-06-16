import {
  errX,
  errY,
  log,
  logA,
  logB,
  logC,
  wait,
  wait1,
  wait2,
  wait3,
} from "../util/utils.js";

function f1() {
  // NOTE: f2 との比較用 (注: () => wait(...) は () => { return wait(...); } と同じことに注意
  //
  // 回答:
  // 3秒後に A が出力され、その2秒後に B が出力され、その1秒後に C が出力される。
  //
  // 説明:
  // wait3 の解決後に logA が実行され、wait2().then(logB) の解決後 (2秒後に B 出力) に wait1().then(logC) が実行されるため。
  //
  // 図解:
  //  wait3
  // |---------------|
  //                  logA
  //                 |-|
  //                    wait2
  //                   |----------|
  //                               logB
  //                              |-|
  //                                 wait1
  //                                |-----|
  //                                       logC
  //                                      |-|
  wait3()
    .then(logA)
    .then(() => wait2().then(logB))
    .then(() => wait1().then(logC));
}

function f2() {
  // NOTE: 2つ目の then の中で return が無くなっていることに注意 (典型的なミス)
  //
  // 解答例:
  // 3秒後に A が出力され、その1秒後に C が出力され、その1秒後に B が出力される。
  // 2つ目の .then のコールバック関数が値を return していないため、この .then が返す Promise は即解決される。
  // このため logA() の実行すぐ後に wait1().then(...) が実行され C が先に出力される。
  //
  // 図解:
  //  wait3
  // |---------------|
  //                  logA
  //                 |-|
  //                    wait2
  //                   |----------|
  //                               logB
  //                              |-|
  //                  wait1
  //                 |-----|
  //                        logC
  //                       |-|
  wait3()
    .then(logA)
    .then(() => {
      wait2().then(logB);
    })
    .then(() => wait1().then(logC));
}

function f3() {
  // NOTE: then のコールバック内の例外は try/catch でキャッチできるだろうか
  /**
   * 予想：
   * wait0→logA→errX→logB→logCの順に呼ばれる。
   *
   * 実行結果：
   * logC→wait0→logA→errXの順に呼ばれる。
   * 非同期関数は関数の実行前にPromiseを返すので、logAよりも先にlogCが呼ばれる。
   */
  try {
    wait(0).then(logA).then(errX);
  } catch (e) {
    logB();
  } finally {
    logC();
  }
}

function f4() {
  // NOTE: f5 との比較用
  /**
   * 予想：
   * wait2→logA→wait(1000)→logB→log(100)
   *
   * 実行結果：
   * 予想と一致
   * Promise<number>を扱っていて、2回目のthenで引数のvalueを無視して100を返している。
   */
  wait2()
    .then(() => {
      logA();
      return 40;
    })
    .then((value) =>
      wait(1000).then(() => {
        logB();
        return 100;
      })
    )
    .then((v) => log(v));
}

function f5() {
  // NOTE: 2つ目の then の引数が関数でなく Promise になっている (典型的なミス)
  /**
   * 予想：
   * wait2→logA→log(40)
   * 実行結果：
   * thenの引数に直接Promiseを渡した場合、即座に評価される。
   *
   * wait2
   * |----------|
   *             logA
   *            |-|
   *               log(40)
   *              |-|
   * wait1
   * |-----|
   *        logB
   *       |-|
   *
   */
  wait2()
    .then(() => {
      logA();
      return 40;
    })
    .then(
      wait1().then(() => {
        logB();
        return 100;
      })
    )
    .then((v) => log(v));
}

function f6() {
  // NOTE: 1つの Promise に対し then を2回呼び出すとどうなるか
  /**
   * 予想：
   * wait1→logA→wait1→logB
   *           →wait2     →logC
   *
   * 実行結果：
   * 予想と一致
   * Promiseが解決したタイミングで両方のthenが実行される
   */

  const p = wait1().then(logA);
  p.then(() => wait1()).then(logB);
  p.then(() => wait2()).then(logC);
}

function f7() {
  // NOTE: 2つ目の wait の引数が実行される差には p は解決済み
  // (= 解決済みの Promise の then を呼び出すとどうなるか)
  /**
   * 予想：
   * 解決済みの Promise の then を呼び出すと、即時実行される
   *
   * 実行結果：
   * 予想と一致
   *
   * wait1
   * |-----|
   *        logA
   *       |-|
   *  wait2
   *  |----------|
   *              logB
   *             |-|
   *                logC
   *               |-|
   */
  const p = wait1().then(logA);
  wait2()
    .then(() => {
      return p.then(logB);
    })
    .then(logC);
}

function f8() {
  // NOTE: f9, f10 との比較用
  /**
   * 予想：
   * wait1→errX→catch→finnaly(logA)
   * errXをスローした時点でcatchが呼び出され、then(errY)は実行されない
   *
   * 実行結果：
   * 予想と一致
   */
  wait1()
    .then(errX)
    .then(errY)
    .catch((e) => log(e.message))
    .finally(logA);
}

function f9() {
  // NOTE: f12 との比較用
  /**
   * 予想：
   * wait1→then 1個目→then 2個目→catch→finally(logA)
   *
   * 実行結果：
   * 予想と一致
   */
  wait1()
    .then(() => 42)
    .then(errY)
    .catch((e) => log(e.message))
    .finally(logA);
}

function f10() {
  // NOTE: then(r, c) と then(r).catch(c) は等しいか？
  /**
   * 予想：
   * 等しい
   *
   * 実行結果：
   * 等しくない
   * エラーをキャッチできない。
   *
   */
  wait1()
    .then(() => 42)
    .then(errY, (e) => log(e.message))
    .finally(logA);
}

function f11() {
  // f12 との比較用: new Promise 内の throw は .catch でキャッチできるか？
  /**
   * 予想：
   * キャッチできる
   *
   * 実行結果：
   * 予想と一致
   */
  new Promise((resolve, reject) => {
    errX();
  }).catch((e) => log(e.message));
}

function f12() {
  // new Promise 内だがコールバック関数で throw した場合は？
  /**
   * 予想：
   * キャッチできない
   *
   * 実行結果：
   * 予想と一致
   * setTimeoutのコールバックでエラーが発生しているためキャッチできない
   *
   */
  new Promise((resolve, reject) => {
    setTimeout(() => errX(), 0);
  }).catch((e) => log(e.message));
}
