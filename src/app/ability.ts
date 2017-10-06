import { Skill } from './skill';

export class Ability {
   name: string;
   score: number;
   skills: Skill[];
   saveProf: boolean;
   constructor(name: string) {
   }
}
