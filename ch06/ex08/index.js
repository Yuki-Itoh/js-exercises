export function restrict(target, template) {
  console.log(target, template);
  for (let key of Object.keys(target)) {
    // templateの継承プロパティを無視するために、コピーしたオブジェクトを使用する
    if (!(key in Object.assign({}, template))) {
      delete target[key];
    }
  }

  console.log(target);
  return target;
}

export function substract(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (key in target) {
        delete target[key];
      }
    }
  }

  return target;
}
