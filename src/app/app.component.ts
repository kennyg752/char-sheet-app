import { Component } from '@angular/core';

const STR = 0;
const DEX = 1;
const CON = 2;
const INT = 3;
const WIS = 4;
const CHA = 5;

export class Class {
   name: string;
   lvl: number;
   constructor() {
      this.name = 'None';
      this.lvl = 0;
   }
}

export class Race {
   name: string;
   size: string;
   speed: number;
   bonuses: number[];
   constructor() {
      this.name = 'Undecided';
      this.speed = 0;
      this.size = 'Small';
      this.bonuses = [0, 0, 0, 0, 0, 0];
   }
}

export class Skill {
   isProficient: boolean;
   bonus: number;
   constructor(mod: number, isProficient: boolean, profBonus: number) {
      this.isProficient = isProficient;
      this.bonus = this.isProficient ? mod + profBonus : mod;
   }
   update(mod: number, profBonus: number): void {
      this.bonus = this.isProficient ? mod + profBonus : mod;
   }
}

export class PC {
   name: string;
   totalLvl: number;
   classes: Class[];
   race: Race;
   score: number[];
   raceBonus: number[];
   baseAC: number;
   profBonus: number;

   constructor() {
      this.name = 'Unknown';
      this.totalLvl = 0;
      this.classes = [new Class()];
      this.race = new Race();
      this.score = [10, 10, 10, 10, 10, 10];
      this.raceBonus = [0, 2, 0, 0, 0, 0];
      this.baseAC = 10;
      this.profBonus = 2;
   }
   getArmorClass(base: number): number {
      return base + this.getMod(DEX);
   }
   getMod(stat: number): number {
      return Math.floor((this.score[stat] - 10 + this.raceBonus[stat]) / 2);
   }
   getSave(stat: number, isProficient: boolean): number {
      let mod = this.getMod(stat);
      return isProficient ? mod + this.profBonus : mod;
   }
   getTotalLvl(): void {
      this.totalLvl = 0;
      for (var i = 0; i < this.classes.length; i++) {
         this.totalLvl += this.classes[i].lvl;
      }
      this.getProfBonus();
   }
   getRace(): void {
      switch (this.race.name) {
         case "Undecided": {
            this.race.speed = 0;
            this.race.size = 'Small';
            break;
         }
         case "Tiefling-Abyssal": {
            this.race.speed = 30;
            this.race.size = 'Medium';
            this.raceBonus = this.race.bonuses;
            break;
         }
         default: {
            break;
         }
      }
   }
   addClass(): void {
      this.classes.push(new Class());
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
   str = STR;
   dex = DEX;
   con = CON;
   int = INT;
   wis = WIS;
   cha = CHA;
   display(toShow: number): string {
      return toShow >= 0 ? "+" + toShow.toString() : toShow.toString();
   }
}
