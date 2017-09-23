import { Component } from '@angular/core';

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
   constructor() {
      this.name = 'Undecided';
      this.speed = 0;
      this.size = 'Small';
   }
}

export class SavingThrow {
   isProficient: boolean;
   bonus: number;
}

export class PC {
   name: string;
   totalLvl: number;
   classes: Class[];
   race: Race;
   score: number[];
   mod: number[];
   saves: SavingThrow[];
   ac: number;
   baseAC: number;
   profBonus: number;

   constructor() {
      this.name = 'Unknown';
      this.totalLvl = 0;
      this.classes = [new Class()];
      this.race = new Race();
      this.baseAC = 10;
      this.profBonus = 2;
      this.score = [10, 10, 10, 10, 10, 10];
      this.mod = [0, 0, 0, 0, 0, 0];
      this.saves = [
         {isProficient: false, bonus: 0},
         {isProficient: false, bonus: 0},
         {isProficient: false, bonus: 0},
         {isProficient: false, bonus: 0},
         {isProficient: false, bonus: 0},
         {isProficient: false, bonus: 0}
      ];
      this.ac = this.baseAC + this.mod[1];
      for (let i = 0; i < 6; i++) {
         this.updateMod(i);
      }
   }

   updateTotalLvl(): void {
      this.totalLvl = 0;
      for (var i = 0; i < this.classes.length; i++) {
         this.totalLvl += this.classes[i].lvl;
      }
      this.updateProfBonus();
   }
   updateRace(): void {
      switch (this.race.name) {
         case "Undecided": {
            this.race.speed = 0;
            this.race.size = 'Small';
            break;
         }
         case "Tiefling-Abyssal": {
            this.race.speed = 30;
            this.race.size = 'Medium';
            break;
         }
         default: {
            break;
         }
      }
   }
   updateMod(index: number): void {
      this.mod[index] = Math.floor((this.score[index] - 10) / 2);
      this.saves[index].bonus = this.saves[index].isProficient ? this.mod[index] + this.profBonus : this.mod[index];
      if (index == 1) {
         this.ac = this.baseAC + this.mod[1];
      }
   }
   addClass(): void {
      this.classes.push(new Class());
   }
   removeClass(index: number): void {
      this.classes.splice(index, 1);
      this.updateTotalLvl();
   }
   private updateProfBonus(): void {
      this.profBonus = Math.max(2, 2 + Math.floor((this.totalLvl - 1) / 4));
   }
}

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styles: [`
      input {
         border-style: none none solid none;
      }
      select {
         -webkit-appearance: none;
         -moz-appearance: none;
         border-style: none none solid none;
      }
   `]
})


export class AppComponent {
   title = 'D&D Character Sheet';

   pc = new PC();

   display(mod: number): string {
      return mod >= 0 ? "+" + mod.toString() : mod.toString();
   }
}
