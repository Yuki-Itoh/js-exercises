setTimeout(() => {
  import("./sub.js") // 2秒後にモジュールを読み込み
    .then((module) => {
      // 読み込み完了後にSubクラスの関数を呼び出す
      const sub = new module.Sub();
      sub.subMethod();
    });
}, 2000);
