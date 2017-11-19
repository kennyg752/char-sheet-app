import { Component, OnInit, Input } from '@angular/core';

import { Armor } from './armor.model';

@Component({
  selector: 'armor-display',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.css']
})
export class ArmorComponent implements OnInit {
  @Input() armors: Armor[];
  constructor() { }

  ngOnInit() {
  }


}
