import { Skill } from './skill';

export class Ability {
   name: string;
   score: number;
   skill: Skill[];
   saveProf: boolean;
   constructor(name: string) {
      this.name = name;
      this.score = 10;
      this.skill = [];
      this.saveProf = false;
   }
}
