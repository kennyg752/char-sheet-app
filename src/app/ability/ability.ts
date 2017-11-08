export class Ability {
  name: string;
  score: number = 10;
  mod: number;

  constructor(name: string) {
    this.name = name;
    this.mod = this.GetMod();
  }

  GetMod() {
    return Math.floor((this.score - 10) / 2);
  }
}
