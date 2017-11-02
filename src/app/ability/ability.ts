export class Ability {
  name: string;
  score: number;
  mod: number;
  
  constructor(name: string) {
    this.name = name;
    this.score = 10;
    this.mod = this.GetMod();
  }

  GetMod() {
    return Math.floor((this.score - 10) / 2);
  }
}
