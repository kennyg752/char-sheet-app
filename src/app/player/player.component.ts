import { Component, OnInit } from '@angular/core';

import { Ability } from '../ability/ability';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  name = '';

  abilities: Ability[] = [
    new Ability('Strength'),
    new Ability('Dexterity'),
    new Ability('Constitution'),
    new Ability('Intelligence'),
    new Ability('Wisdom'),
    new Ability('Charisma')
  ];
  armorType = 'none';
  constructor() { }

  ngOnInit() {
  }

  GetAC(shieldBonus: number) {
    let dexMod = this.abilities[1].GetMod();
    switch (this.armorType){
      case 'none':
        return 10 + dexMod + shieldBonus;
      case 'mage':
        return 13 + dexMod + shieldBonus;
      case 'leather':
        return 11 + dexMod + shieldBonus;
      case 'studded-leather':
        return 12 + dexMod + shieldBonus;
      case 'chain-mail':
        return 16 + shieldBonus;
      default:
        break;
    }
  }
}
