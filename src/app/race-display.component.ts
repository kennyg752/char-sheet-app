import { Component, Input } from '@angular/core';
import { Race } from './race';
import { Options } from './options';


@Component({
   selector: 'race-display',
   template: `
      <div>
         <label>Race: </label>
         <select [(ngModel)]="race">
            <option *ngFor="let option of options" [ngValue]="option">{{option.name}}</option>
         </select>
      </div>
   `
})

export class RaceDisplayComponent {
   @Input() race: Race;
   @Input() options: Race[];
}
