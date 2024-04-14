import { MagicWarrior, MagicWarrior2, Warrior } from ".";

test("継承", () => {
  expect(Warrior.prototype.isPrototypeOf(MagicWarrior.prototype)).toBeTruthy();
  expect(Warrior.prototype.isPrototypeOf(MagicWarrior2.prototype)).toBeTruthy();

  const mw = new MagicWarrior();
  expect(mw instanceof MagicWarrior).toBeTruthy();
  expect(mw instanceof Warrior).toBeTruthy();

  const mw2 = new MagicWarrior2();
  expect(mw2 instanceof MagicWarrior2).toBeTruthy();
  expect(mw2 instanceof Warrior).toBeTruthy();
});

test.each([
  { atk: 0, mgc: 0, wAttack: 0, mwAttack: 0 },
  { atk: 1, mgc: 0, wAttack: 2, mwAttack: 2 },
  { atk: 0, mgc: 1, wAttack: 0, mwAttack: 1 },
  { atk: 10, mgc: 15, wAttack: 20, mwAttack: 35 },
])("attack", ({ atk, mgc, wAttack, mwAttack }) => {
  const w = new Warrior(atk);
  const mw = new MagicWarrior(atk, mgc);
  const mw2 = new MagicWarrior2(atk, mgc);
  expect(w.attack()).toBe(wAttack);
  expect(mw.attack()).toBe(mwAttack);
  expect(mw2.attack()).toBe(mwAttack);
});
