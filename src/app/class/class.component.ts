import { Component, OnInit, Input } from '@angular/core';

import { Class } from './class';
@Component({
  selector: 'class-display',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  @Input() appClass: Class;
  constructor() { }

  ngOnInit() {
  }

  levelUp() {
    if (this.appClass.level < 20)
      this.appClass.level++;
  }
  levelDown() {
    if (this.appClass.level > 0)
      this.appClass.level--;
  }
}
