class UnsupportedArgumentsError extends Error {
  constructor(...args) {
    super(`Unsupported arguments: ${[...args]}`);
    this.args = [...args];
  }

  get name() {
    return "UnsupportedArgumentsError";
  }
}

const error = new UnsupportedArgumentsError(1, "str");
console.log(error.args); // => [ 1, 'str' ]
console.log(error.message); // => Unsupported arguments: 1,str
console.log(error.name); // => UnsupportedArgumentsError
