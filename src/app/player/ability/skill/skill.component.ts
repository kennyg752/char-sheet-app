import { Component, OnInit, Input } from '@angular/core';

import { Skill } from './skill.model';
@Component({
  selector: 'skill-display',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skills: Skill[];
  @Input() mod: number;

  constructor() { }

  ngOnInit() {
  }

  getBonus(index: number) {
    let bonus = this.mod;
    if (this.skills[index].proficiency === 'proficient')
      bonus += 2; //2 should be proficiency bonus from classes component
    else if (this.skills[index].proficiency === 'expert')
      bonus += 4;
    return bonus;
  }
}
