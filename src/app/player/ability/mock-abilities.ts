import { Ability } from './ability.model';

import { SKILLS } from './skill/mock-skills';
export const ABILITIES: Ability[] = [
  {
    name: 'Strength',
    score: 10,
    mod: 0,
    proficiency: 'none',
    skills: SKILLS[0],
  },
  {
    name: 'Dexterity',
    score: 10,
    mod: 0,
    proficiency: 'none',
    skills: SKILLS[1],
  },
  {
    name: 'Constitution',
    score: 10,
    mod: 0,
    proficiency: 'none',
    skills: SKILLS[2],
  },
  {
    name: 'Intelligence',
    score: 10,
    mod: 0,
    proficiency: 'none',
    skills: SKILLS[3],
  },
  {
    name: 'Wisdom',
    score: 10,
    mod: 0,
    proficiency: 'none',
    skills: SKILLS[4],
  },
  {
    name: 'Charisma',
    score: 10,
    mod: 0,
    proficiency: 'none',
    skills: SKILLS[5],
  },
];
