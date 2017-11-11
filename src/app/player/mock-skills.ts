import { Skill } from '../skill/skill';

const STR = 0;
const DEX = 1;
const CON = 2;
const INT = 3;
const WIS = 4;
const CHA = 5;

export const SKILLS: Skill[] = [
  {
    name: 'Acrobatics',
    isProficient: false,
    type: DEX,
    bonus: 0,
  },
  {
    name: 'Animal Handling',
    isProficient: false,
    type: WIS,
    bonus: 0,
  },
  {
    name: 'Arcana',
    isProficient: false,
    type: INT,
    bonus: 0,
  },
  {
    name: 'Athletics',
    isProficient: false,
    type: STR,
    bonus: 0,
  },
  {
    name: 'Deception',
    isProficient: false,
    type: CHA,
    bonus: 0,
  },
  {
    name: 'History',
    isProficient: false,
    type: INT,
    bonus: 0,
  },
  {
    name: 'Insight',
    isProficient: false,
    type: WIS,
    bonus: 0,
  },
  {
    name: 'Intimidation',
    isProficient: false,
    type: CHA,
    bonus: 0,
  },
  {
    name: 'Investigation',
    isProficient: false,
    type: INT,
    bonus: 0,
  },
  {
    name: 'Medicine',
    isProficient: false,
    type: WIS,
    bonus: 0,
  },
  {
    name: 'Nature',
    isProficient: false,
    type: INT,
    bonus: 0,
  },
  {
    name: 'Perception',
    isProficient: false,
    type: WIS,
    bonus: 0,
  },
  {
    name: 'Performance',
    isProficient: false,
    type: CHA,
    bonus: 0,
  },
  {
    name: 'Persuasion',
    isProficient: false,
    type: CHA,
    bonus: 0,
  },
  {
    name: 'Religion',
    isProficient: false,
    type: INT,
    bonus: 0,
  },
  {
    name: 'Sleight of Hand',
    isProficient: false,
    type: DEX,
    bonus: 0,
  },
  {
    name: 'Stealth',
    isProficient: false,
    type: DEX,
    bonus: 0,
  },
  {
    name: 'Survival',
    isProficient: false,
    type: WIS,
    bonus: 0,
  },
];
