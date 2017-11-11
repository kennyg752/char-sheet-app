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
    return this.skill.isProficient ? mod + profBonus : mod;
  }
}
