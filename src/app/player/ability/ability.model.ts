import { Skill } from './skill/skill.model';

export class Ability {
  name: string;
  score: number;
  mod: number;
  proficiency: string;
  skills: Skill[];
}
