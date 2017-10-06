import { Race } from './race';
import { Class } from './class';
import { Skill } from './skill';
import { Ability } from './ability';
import { Options } from './options';


export class PC {
   name: string;
   totalLvl: number;
   classes: Class[];
   race: Race;
   stat: Ability[];
   saveProf: boolean[];
   baseAC: number;
   profBonus: number;

   constructor() {
      this.name = 'Unknown';
      this.totalLvl = 0;
      this.classes = [new Class('None', 8)];
      this.race = new Race('None', 'Medium', 30, [0, 0, 0, 0, 0, 0]);
      this.stat = [];
      this.baseAC = 10;
      this.profBonus = 2;
   }
   private getProfBonus(): void {
      this.profBonus = Math.max(2, 2 + Math.floor((this.totalLvl - 1) / 4));
   }
}
