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

export class Ability {
   score: number;
   mod: number;
   isProficient: boolean;
   save: number;
   constructor(score: number, isProficient: boolean, profBonus: number) {
      this.score = score;
      this.isProficient = isProficient;
      this.mod = Math.floor((this.score - 10) / 2);
      this.save = this.isProficient ? this.mod + profBonus : this.mod;
   }
}

export class Strength extends Ability {
   athletics: Skill;

   constructor(score: number, isProficient: boolean, profBonus: number) {
      super(score, isProficient, profBonus);
      this.athletics = new Skill(this.mod, false, profBonus);
   }
   update(profBonus: number): void {
      this.mod = Math.floor((this.score - 10) / 2);
      this.save = this.isProficient ? this.mod + profBonus : this.mod;
      this.athletics.update(this.mod, profBonus);
   }
}

export class Dexterity extends Ability {
   acrobatics: Skill;
   sleightOfHand: Skill;
   stealth: Skill;

   constructor(score: number, isProficient: boolean, profBonus: number) {
      super(score, isProficient, profBonus);
      this.acrobatics = new Skill(this.mod, false, profBonus);
      this.sleightOfHand = new Skill(this.mod, false, profBonus);
      this.stealth = new Skill(this.mod, false, profBonus);
   }
   update(profBonus: number): void {
      this.mod = Math.floor((this.score - 10) / 2);
      this.save = this.isProficient ? this.mod + profBonus : this.mod;
      this.acrobatics.update(this.mod, profBonus);
      this.sleightOfHand.update(this.mod, profBonus);
      this.stealth.update(this.mod, profBonus);
   }
}

export class Constitution extends Ability {

   constructor(score: number, isProficient: boolean, profBonus: number) {
      super(score, isProficient, profBonus);
   }
   update(profBonus: number): void {
      this.mod = Math.floor((this.score - 10) / 2);
      this.save = this.isProficient ? this.mod + profBonus : this.mod;
   }
}

export class Intelligence extends Ability {
   arcana: Skill;
   history: Skill;
   investigation: Skill;
   nature: Skill;
   religion: Skill;

   constructor(score: number, isProficient: boolean, profBonus: number) {
      super(score, isProficient, profBonus);
      this.arcana = new Skill(this.mod, false, profBonus);
      this.history = new Skill(this.mod, false, profBonus);
      this.investigation = new Skill(this.mod, false, profBonus);
      this.nature = new Skill(this.mod, false, profBonus);
      this.religion = new Skill(this.mod, false, profBonus);
   }
   update(profBonus: number): void {
      this.mod = Math.floor((this.score - 10) / 2);
      this.save = this.isProficient ? this.mod + profBonus : this.mod;
      this.arcana.update(this.mod, profBonus);
      this.history.update(this.mod, profBonus);
      this.investigation.update(this.mod, profBonus);
      this.nature.update(this.mod, profBonus);
      this.religion.update(this.mod, profBonus);
   }
}

export class Wisdom extends Ability {
   animalHandling: Skill;
   insight: Skill;
   medicine: Skill;
   perception: Skill;
   survival: Skill;

   constructor(score: number, isProficient: boolean, profBonus: number) {
      super(score, isProficient, profBonus);
      this.animalHandling = new Skill(this.mod, false, profBonus);
      this.insight = new Skill(this.mod, false, profBonus);
      this.medicine = new Skill(this.mod, false, profBonus);
      this.perception = new Skill(this.mod, false, profBonus);
      this.survival = new Skill(this.mod, false, profBonus);
   }
   update(profBonus: number): void {
      this.mod = Math.floor((this.score - 10) / 2);
      this.save = this.isProficient ? this.mod + profBonus : this.mod;
      this.animalHandling.update(this.mod, profBonus);
      this.insight.update(this.mod, profBonus);
      this.medicine.update(this.mod, profBonus);
      this.perception.update(this.mod, profBonus);
      this.survival.update(this.mod, profBonus);
   }
}

export class Charisma extends Ability {
   deception: Skill;
   intimidation: Skill;
   performance: Skill;
   persuasion: Skill;

   constructor(score: number, isProficient: boolean, profBonus: number) {
      super(score, isProficient, profBonus);
      this.deception = new Skill(this.mod, false, profBonus);
      this.intimidation = new Skill(this.mod, false, profBonus);
      this.performance = new Skill(this.mod, false, profBonus);
      this.persuasion = new Skill(this.mod, false, profBonus);
   }
   update(profBonus: number): void {
      this.mod = Math.floor((this.score - 10) / 2);
      this.save = this.isProficient ? this.mod + profBonus : this.mod;
      this.deception.update(this.mod, profBonus);
      this.intimidation.update(this.mod, profBonus);
      this.performance.update(this.mod, profBonus);
      this.persuasion.update(this.mod, profBonus);
   }
}

export class PC {
   name: string;
   totalLvl: number;
   classes: Class[];
   race: Race;
   str: Strength;
   dex: Dexterity;
   con: Constitution;
   int: Intelligence;
   wis: Wisdom;
   cha: Charisma;
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
      this.str = new Strength(10, false, this.profBonus);
      this.dex = new Dexterity(10, false, this.profBonus);
      this.con = new Constitution(10, false, this.profBonus);
      this.int = new Intelligence(10, false, this.profBonus);
      this.wis = new Wisdom(10, false, this.profBonus);
      this.cha = new Charisma(10, false, this.profBonus);
      this.ac = this.baseAC + this.dex.mod;
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
            this.race.bonuses[5] = 2; //Charisma +2
            this.race.bonuses[2] = 1; //Constitution +1
            break;
         }
         default: {
            break;
         }
      }
      this.str.score += this.race.bonuses[0];
      this.str.update(this.profBonus);
      this.dex.score += this.race.bonuses[1];
      this.dex.update(this.profBonus);
      this.con.score += this.race.bonuses[2];
      this.con.update(this.profBonus);
      this.int.score += this.race.bonuses[3];
      this.int.update(this.profBonus);
      this.wis.score += this.race.bonuses[4];
      this.wis.update(this.profBonus);
      this.cha.score += this.race.bonuses[5];
      this.cha.update(this.profBonus);
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
      this.str.update(this.profBonus);
      this.dex.update(this.profBonus);
      this.con.update(this.profBonus);
      this.int.update(this.profBonus);
      this.wis.update(this.profBonus);
      this.cha.update(this.profBonus);
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

   display(mod: number): string {
      return mod >= 0 ? "+" + mod.toString() : mod.toString();
   }
}
