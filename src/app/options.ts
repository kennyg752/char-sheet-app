import { Race } from './race';
import { Class } from './class';

export class Options {
   classes: Class[] = [];
   races: Race[] = [];
   constructor() {
      this.classes.push(new Class('None', 0));
      this.classes.push(new Class('Barbarian', 12));
      this.classes.push(new Class('Bard', 8));
      this.classes.push(new Class('Cleric', 8));
      this.classes.push(new Class('Druid', 8));
      this.classes.push(new Class('Fighter', 10));
      this.classes.push(new Class('Monk', 8));
      this.classes.push(new Class('Paladin', 10));
      this.classes.push(new Class('Ranger', 10));
      this.classes.push(new Class('Rogue', 8));
      this.classes.push(new Class('Sorcerer', 6));
      this.classes.push(new Class('Warlock', 8));
      this.classes.push(new Class('Wizard', 6));
      this.races = [
         new Race('Undecided', 'Small', 30, [0, 0, 0, 0, 0, 0]),
         new Race('Dragonborn', 'Medium', 30, [2, 0, 0, 0, 0, 1]),
         new Race('Dwarf-Hill', 'Medium', 25, [0, 0, 2, 0, 1, 0]),
         new Race('Dwarf-Mountain', 'Medium', 25, [2, 0, 2, 0, 0, 0]),
         new Race('Elf-Drow', 'Medium', 30, [0, 2, 0, 0, 0, 1]),
         new Race('Elf-High', 'Medium', 30, [0, 2, 0, 1, 0, 0]),
         new Race('Elf-Wood', 'Medium', 30, [0, 2, 0, 0, 1, 0]),
         new Race('Gnome-Forest', 'Small', 25, [0, 1, 0, 2, 0, 0]),
         new Race('Gnome-Rock', 'Small', 25, [0, 0, 1, 2, 0, 0]),
         new Race('Goliath', 'Medium', 30, [2, 0, 1, 0, 0, 0]),
         new Race('Half-Elf', 'Medium', 30, [0, 0, 0, 0, 0, 2]),
         new Race('Half-Orc', 'Medium', 30, [2, 0, 1, 0, 0, 0]),
         new Race('Halfling-Ghostwise', 'Small', 25, [0, 2, 0, 0, 1, 0]),
         new Race('Halfling-Lightfoot', 'Small', 25, [0, 2, 0, 0, 0, 1]),
         new Race('Halfling-Stout', 'Small', 25, [0, 2, 1, 0, 0, 0]),
         new Race('Human', 'Medium', 30, [1, 1, 1, 1, 1, 1]),
         new Race('Human-Variant', 'Medium', 30, [0, 0, 0, 0, 0, 0]),
         new Race('Tiefling-Abyssal', 'Medium', 30, [0, 0, 1, 0, 0, 2]),
         new Race('Tiefling-Infernal', 'Medium', 30, [0, 0, 0, 1, 0, 2])
      ];
   }
   getRace(index: number): Race {
      return this.races[index];
   }
}
