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

}
