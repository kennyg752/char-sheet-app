import { Race } from './race';
import { Class } from './class';

export class Options {
   classes: Class[] = [];
   races: Race[] = [];
   constructor() {
      this.classes = [];
      this.races = [];
   }
   getRace(index: number): Race {
      return this.races[index];
   }
}
