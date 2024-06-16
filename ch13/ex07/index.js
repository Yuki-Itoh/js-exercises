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

async function h1() {
  /**
   * 予想：
   * 同期的に上から順に処理され、エラーはスローされない
   *
   * 実行結果：
   * 予想と一致
   *
   * wait3
   * |---------|
   *            logA
   *           |-|
   *              wait2
   *             |------|
   *                     logB
   *                    |-|
   *                       wait1
   *                      |---|
   *                           logC
   *                          |-|
   */
  try {
    await wait3();
    logA();
    await wait2();
    logB();
    await wait1();
    logC();
  } catch (e) {
    log(e.message);
  }
}

function h2() {
  // NOTE: h3 との比較用
  /**
   * 予想：
   * errXをキャッチしてログを出力する
   *
   * 実行結果：
   * 予想と一致
   */
  new Promise(() => {
    errX();
  }).catch((e) => log(e.message));
}

function h3() {
  // NOTE: new Promise の引数が async function の場合、例外はどう扱われるだろう
  /**
   * 予想：
   * errXをキャッチしてログを出力する
   *
   * 実行結果：
   * errXはスローされるが、キャッチできない
   */
  new Promise(async () => {
    errX();
  }).catch((e) => log(e.message));
}
h4();
async function h4() {
  // NOTE: 2つの例外は両方 catch できるか？
  /**
   * 予想：
   * p2が先にエラーをスローしてキャッチされる。
   * その時点でtryの処理は中断される
   *
   * 実行結果：
   * 片方だけならcatchできるが、2つの例外はキャッチできない。
   */
  try {
    const p1 = wait2().then(() => {
      errX();
    });
    const p2 = wait1().then(() => {
      errY();
    });
    await p1;
    await p2;
  } catch (e) {
    log(e.message);
  }
}
