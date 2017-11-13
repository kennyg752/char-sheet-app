import { Component, OnInit, Input } from '@angular/core';

import { Skill } from './skill';
import { Player } from '../player/player'
@Component({
  selector: 'skill-display',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill;
  @Input() player: Player;

  constructor() { }

  ngOnInit() {
  }

  getBonus(mod: number, profBonus: number): number {
    let bonus = mod;
    if (this.skill.proficiency === 'expert')
      bonus += 2 * profBonus;
    else if (this.skill.proficiency === 'proficient')
      bonus += profBonus;
    return bonus;
  }
  checkScope(value: string) {
    this.skill.proficiency = value;
  }
}
