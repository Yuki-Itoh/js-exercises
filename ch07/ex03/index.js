// reduce を使って関数 (sum, join, reverse, every, some) を実装しなさい。

export function sum(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  return array.reduce((previous, current) => {
    return previous + current;
  });
}

export function join(array, delimiter) {
  if (!Array.isArray(array)) {
    throw new Error();
  }
  if (array.length === 0) {
    return "";
  }

  const del = delimiter !== undefined ? delimiter : ",";

  return array
    .map((value) => {
      if (value === null) {
        return "";
      }
      return value;
    })
    .reduce((previous, current) => {
      return "" + previous + del + current;
    });
}

export function reverse(array) {
  if (!Array.isArray(array)) {
    throw new Error();
  }
  if (array.length === 0) {
    return [];
  }
  if (array.length === 1) {
    return array;
  }

  return array.reduce((previous, current) => {
    return [current].concat(previous);
  });
}

export function every(array, predicate) {
  if (!Array.isArray(array)) {
    throw false;
  }
  if (array.length === 0) {
    return true;
  }

  return array.reduce((previous, current, index, array) => {
    if (previous === true || previous === false) {
      return previous && predicate(current, index, array);
    } else {
      return (
        predicate(previous, index - 1, array) &&
        predicate(current, index, array)
      );
    }
  });
}

export function some(array, predicate) {
  if (!Array.isArray(array)) {
    throw false;
  }
  if (array.length === 0) {
    return false;
  }

  return array.reduce((previous, current, index, array) => {
    if (previous === true || previous === false) {
      return previous || predicate(current, index, array);
    } else {
      return (
        predicate(previous, index - 1, array) ||
        predicate(current, index, array)
      );
    }
  });
}
