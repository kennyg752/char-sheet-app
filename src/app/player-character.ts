import { Race } from './race';
import { Class } from './class';
import { Skill } from './skill';
import { Ability } from './ability';
import { Options } from './options';

const STR = 0;
const DEX = 1;
const CON = 2;
const INT = 3;
const WIS = 4;
const CHA = 5;

export class PC {
   name: string;
   totalLvl: number;
   options: Options;
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
      this.stat = [
         new Ability('Strength'),
         new Ability('Dexterity'),
         new Ability('Constitution'),
         new Ability('Intelligence'),
         new Ability('Wisdom'),
         new Ability('Charisma')
      ];
      this.initializeSkills();
      this.baseAC = 10;
      this.profBonus = 2;
   }
   initializeSkills(): void {
      this.addSkill(STR, 'Athletics', false);
      this.addSkill(DEX, 'Acrobatics', false);
      this.addSkill(DEX, 'Sleight Of Hand', false);
      this.addSkill(DEX, 'Stealth', false);
      this.addSkill(INT, 'Arcana', false);
      this.addSkill(INT, 'History', false);
      this.addSkill(INT, 'Investigation', false);
      this.addSkill(INT, 'Nature', false);
      this.addSkill(INT, 'Religion', false);
      this.addSkill(WIS, 'Animal Handling', false);
      this.addSkill(WIS, 'Insight', false);
      this.addSkill(WIS, 'Medicine', false);
      this.addSkill(WIS, 'Perception', false);
      this.addSkill(WIS, 'Survival', false);
      this.addSkill(CHA, 'Deception', false);
      this.addSkill(CHA, 'Intimidation', false);
      this.addSkill(CHA, 'Performance', false);
      this.addSkill(CHA, 'Persuasion', false);
   }
   addSkill(index: number, name: string, isProf: boolean): void {
      this.stat[index].skill.push(new Skill(name, isProf));
   }
   getArmorClass(base: number): number {
      return base + this.getMod(DEX);
   }
   getMod(index: number): number {
      return Math.floor((this.stat[index].score - 10 + this.race.bonus[index]) / 2);
   }
   getSave(index: number, isProficient: boolean): number {
      let mod = this.getMod(index);
      return isProficient ? mod + this.profBonus : mod;
   }
   getSkill(index: number, isProficient: boolean): number {
      let mod = this.getMod(index);
      return isProficient ? mod + this.profBonus : mod;
   }
   private getProfBonus(): void {
      this.profBonus = Math.max(2, 2 + Math.floor((this.totalLvl - 1) / 4));
   }
}
