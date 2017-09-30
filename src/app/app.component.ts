import { Component } from '@angular/core';

const STR = 0;
const DEX = 1;
const CON = 2;
const INT = 3;
const WIS = 4;
const CHA = 5;

export class Class {
   name: string;
   id: number;
   lvl: number;
   constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
      this.lvl = 0;
   }
}

export class Race {
   name: string;
   id: number;
   size: string;
   speed: number;
   bonus: number[];
   constructor(name: string, id: number, size: string, speed: number, bonus: number[]) {
      this.name = name;
      this.id = id;
      this.size = size;
      this.speed = speed;
      this.bonus = bonus;
   }
}

export class Options {
   classes: Class[];
   races: Race[];
   constructor() {
      this.classes = [
         new Class('None', 0),
         new Class('Paladin', 1)
      ];
      this.races = [
         new Race('Undecided', 0, 'Small', 30, [0, 0, 0, 0, 0, 0]),
         new Race('Dwarf-Hill', 1, 'Medium', 25, [0, 0, 2, 0, 1, 0]),
         new Race('Tiefling-Abyssal', 2, 'Medium', 30, [0, 0, 1, 0, 0, 2])
      ];
   }
   getRace(index: number): Race {
      return this.races[index];
   }
}

export class Skill {
   name: string;
   isProf: boolean;
   constructor(name: string, isProf: boolean) {
      this.name = name;
      this.isProf = isProf;
   }
}
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
      this.options = new Options();
      this.classes = [new Class('None', 0)];
      this.race = this.options.races[0];
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
   setClass(oldId: number, newId: number): void {
      this.classes[oldId].name = this.options.classes[newId].name;
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
   getTotalLvl(): void {
      this.totalLvl = 0;
      for (var i = 0; i < this.classes.length; i++) {
         this.totalLvl += this.classes[i].lvl;
      }
      this.getProfBonus();
   }
   addClass(): void {
      this.classes.push(new Class('None', this.classes.length));
   }
   removeClass(index: number): void {
      this.classes.splice(index, 1);
      this.getTotalLvl();
   }
   private getProfBonus(): void {
      this.profBonus = Math.max(2, 2 + Math.floor((this.totalLvl - 1) / 4));
   }
}

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: [`./app.component.css`]
})


export class AppComponent {
   title = 'D&D Character Sheet';

   pc = new PC();

   display(toShow: number): string {
      return toShow >= 0 ? "+" + toShow.toString() : toShow.toString();
   }
}
