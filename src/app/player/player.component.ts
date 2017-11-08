import { Component, OnInit } from '@angular/core';

import { Player } from './player';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  Player pc = new Player();

  constructor() { }

  ngOnInit() {
  }

}
