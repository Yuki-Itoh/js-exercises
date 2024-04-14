class Animal {
  eat() {
    console.log("eat");
  }
}

class Dog extends Animal {
  constructor() {
    this.soundMaker = new SoundMaker();
  }

  makeSound() {
    return this.soundMaker.makeSound();
  }

  bite() {
    console.log("bite");
  }
}

class Husky extends Dog {}

class Cat extends Animal {
  constructor() {
    this.soundMaker = new SoundMaker();
  }

  makeSound() {
    return this.soundMaker.makeSound();
  }

  scratch() {
    console.log("scratch");
  }
}

class Bird extends Animal {
  constructor() {
    this.soundMaker = new SoundMaker();
  }

  makeSound() {
    return this.soundMaker.makeSound();
  }

  fly() {
    console.log("fly");
  }
}

class Fish extends Animal {
  swim() {
    console.log("swim");
  }
}

class SoundMaker {
  makeSound() {
    console.log("makeSound");
  }
}
