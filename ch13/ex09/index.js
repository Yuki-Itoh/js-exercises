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

async function i1() {
  // NOTE: any で1つ Promise が解決された時に他の Promise はどうなるだろうか
  /**
   * 予想：
   * log1回目：42
   * log2回目：42
   *
   * 実行結果：
   * log1回目：42
   * log2回目：100
   * v = await Promise.any()の代入は42で処理されるため0の代入は行われないが、
   * v = 100はこの代入式とは別に処理される。
   *
   */
  let v = 0;

  v = await Promise.any([
    wait1().then(() => 42),
    wait2()
      .then(() => (v = 100))
      .then(() => 0),
  ]);

  log(v);
  await wait2();
  log(v);
}

async function i2() {
  /**
   * 予想：
   * logC→logB→logA→log("A")
   *
   * 実行結果：
   * logC→logB→logA→log(['A', 'B', 'C'])
   * Promise.all()の返り値は配列になる。
   */
  const v = await Promise.all([
    wait3().then(() => {
      logA();
      return "A";
    }),
    wait2().then(() => {
      logB();
      return "B";
    }),
    wait1().then(() => {
      logC();
      return "C";
    }),
  ]);
  log(v);
}

async function i3() {
  // NOTE: all で引数の1つが失敗すると他の Promise はどうなるだろうか
  /**
   * 予想：
   * errYの例外をキャッチし、エラーメッセージを出力する。
   * 他のPromiseはそのまま実行される。
   * log(v)の1回目は42、その後waitしている間にerrXがスローされる。
   *
   * 実行結果：
   * log(v)の2回目が0になっていることから、1つめのPromiseは実行されている。
   * しかし、errXはキャッチされていない。
   *
   *  wait3
   * |---------------|
   *                  errX
   *                 |-|
   *  wait2
   * |----------|
   *             logB
   *            |-|
   *  wait1
   * |-----|
   *        errY
   *       |-|
   *          log(e.message)
   *         |-|
   *            log(v)
   *           |-|
   *
   */
  let v = 42;
  try {
    await Promise.all([
      wait3().then(() => {
        v = 0;
        errX();
      }),
      wait2().then(() => {
        logB();
        return "B";
      }),
      wait1().then(() => {
        errY();
      }),
    ]);
  } catch (e) {
    log(e.message);
    log(v);
    await wait3();
    log(v);
  }
}

async function i4() {
  // NOTE: i5, i6 との比較用 (直列に処理を実行したいものとする)
  /**
   * 予想：
   * 4→3→2→1→0→COMPLETEDの順にログ出力される。
   *
   * 実行結果：
   * 直列に処理される。(0→1→2→3→4→COMPLETED)
   */
  let p = Promise.resolve(null);
  for (let i = 0; i < 5; ++i) {
    p = p.then(() => wait((5 - i) * 1000).then(() => log(i)));
  }
  return p.then(() => log("COMPLETED"));
}

async function i5() {
  // NOTE: このコードは期待通りの挙動をすると考えられるだろうか？(典型的なミス)
  /**
   * 予想：
   * p.then()の引数が関数になっていないので、pは解決されたままでPromiseのチェーンが連鎖していない。
   *
   * 実行結果：
   * COMPLETED→4→3→2→1→0の順にログ出力された。
   */
  let p = Promise.resolve(null);
  for (let i = 0; i < 5; ++i) {
    p = p.then(wait((5 - i) * 1000).then(() => log(i)));
  }
  return p.then(() => log("COMPLETED"));
}

async function i6() {
  /**
   * 予想：
   * 4→3→2→1→0→COMPLETED
   *
   * 実行結果：
   * 予想と一致
   */
  return Promise.all(
    [0, 1, 2, 3, 4].map((i) => wait((5 - i) * 1000).then(() => log(i)))
  ).then(() => log("COMPLETED"));
}

async function i7() {
  // NOTE: i8 との比較用
  /**
   * 予想：
   * 10が出力される
   *
   * 実行結果：
   * 予想と一致
   */
  let v = 0;

  // 1秒待った後に2秒間隔で value の値を更新
  const p1 = async () => {
    await wait1();
    for (let i = 0; i < 5; i++) {
      const next = v + 1;
      v = next;
      await wait2();
    }
  };

  // 2秒間隔で value の値を更新
  const p2 = async () => {
    for (let i = 0; i < 5; i++) {
      const next = v + 1;
      v = next;
      await wait2();
    }
  };

  await Promise.all([p1(), p2()]);
  log(v);
}

async function i8() {
  // NOTE: 複数の非同期処理が1つの変数に対し書き込みを行う場合、読み込みと書き込みの間に await が入るとどうなるだろうか
  /**
   * 予想：
   * 5が出力される
   *
   * 実行結果：
   * 予想と一致
   */
  let v = 0;

  const p1 = async () => {
    await wait1();
    for (let i = 0; i < 5; i++) {
      // NOTE: value の読み込み (value + 1) と書き込み (value = ...) の間に await が...
      const next = v + 1;
      await wait2();
      v = next;
    }
  };

  const p2 = async () => {
    for (let i = 0; i < 5; i++) {
      const next = v + 1;
      await wait2();
      v = next;
    }
  };

  await Promise.all([p1(), p2()]);
  log(v);
}
