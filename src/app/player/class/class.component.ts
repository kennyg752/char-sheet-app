import { Component, OnInit, Input } from '@angular/core';

import { Class } from './class.model';

import { CLASSES } from './mock-classes';
@Component({
  selector: 'class-display',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  classes: Class[] = CLASSES;
  totalLvl: number = 0;
  profBonus: number;
  build: Class[] = [];
  constructor() { }

  ngOnInit() {
  }

  levelUp(curClass: Class) {
    if (this.totalLvl < 20) {
      curClass.level++;
      this.build.push(curClass);
    }
    this.totalLvl = this.build.length;
  }
  levelDown(curClass: Class) {
    if (this.totalLvl > 0) {
      curClass.level--;
      for (let i = this.build.length - 1; i >= 0; i--) {
        if (this.build[i].name === curClass.name) {
          this.build.splice(i, 1);
          return;
        }
      }
    }
    this.totalLvl = this.build.length;
  }
}
