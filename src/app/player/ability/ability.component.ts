import { Component, OnInit, Input } from '@angular/core';

import { Ability } from './ability.model';

import { ABILITIES } from './mock-abilities';
import { SKILLS } from './skill/mock-skills';

@Component({
  selector: 'ability-display',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.css']
})

export class AbilityComponent implements OnInit {
  abilities: Ability[] = ABILITIES;

  constructor() {
  }

  ngOnInit() {
  }
  getMod(index: number) {
    this.abilities[index].mod = Math.floor((this.abilities[index].score - 10) / 2);
    return this.abilities[index].mod;
  }
}
