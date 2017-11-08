import { Ability } from '../ability/ability';
import { Race } from '../race/race';
import { Skill } from '../skill/skill';
import { Class } from '../class/class';
import { ARMORS } from './mock-armors';

export class Player {
  name = '';
  ac: number; //Armor Class
  initiative: number;
  totalLvl: number = 0;
  profBonus: number = 2;
  race: Race;
  abilities: Ability[] = [
    new Ability('Strength'),
    new Ability('Dexterity'),
    new Ability('Constitution'),
    new Ability('Intelligence'),
    new Ability('Wisdom'),
    new Ability('Charisma')
  ];

  classes: Class[] = [];
  skills: Skill[] = [];
  equippedArmor = this.setArmor('Unarmored');

  constructor {
    this.ac = this.getAC();
  }

  getAC(): number {
    if (this.equippedArmor.type === 'heavy') {
      return this.equippedArmor.baseAC;
    }
    else if (this.equippedArmor.type === 'medium') {
      return this.equippedArmor.baseAC + Math.min(2, this.abilities[1].mod);
    }
    else {
      return this.equippedArmor.baseAC + this.abilities[1].mod;
    }
  }
  setArmor(name: string): Armor {
    for (armor in ARMORS) {
      if (armor.name === name) {
        return armor;
      }
    }
  }
}
