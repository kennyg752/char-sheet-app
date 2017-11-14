import { Component, OnInit } from '@angular/core';

import { Player } from './player';

import { ARMORS } from './mock-armors';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  pc: Player = new Player();

  constructor() { }

  ngOnInit() {
  }

  getTotalLvl(): number {
    this.pc.totalLvl = 0;
    for (let _class of this.pc.classes) {
      this.pc.totalLvl += _class.level;
    }
    return this.pc.totalLvl;
  }
}
