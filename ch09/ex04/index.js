export class Warrior {
  constructor(atk) {
    this.atk = atk;
  }

  attack() {
    return this.atk * 2;
  }
}

// classを使った継承
export class MagicWarrior extends Warrior {
  constructor(atk, mgc) {
    super(atk);
    this.mgc = mgc;
  }

  attack() {
    return super.attack() + this.mgc;
  }
}

// prototypeを使った継承
export function MagicWarrior2(atk, mgc) {
  this.atk = atk;
  this.mgc = mgc;
}
MagicWarrior2.prototype = Object.create(Warrior.prototype);
MagicWarrior2.prototype.attack = function () {
  return this.atk * 2 + this.mgc;
};
