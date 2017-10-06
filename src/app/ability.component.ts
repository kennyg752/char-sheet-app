import { Component, Input } from '@angular/core';
import { Ability } from './ability';
import { Race } from './race';



@Component({
   selector: 'ability-display',
   template: `
      <div>
         <div *ngFor="let stat of stats; let i = index">
            <label>{{stat.name}}: </label>
            <input [(ngModel)]="stat.score" size="2" maxlength="2">
            <div *ngFor="let skill of stat.skill">
               <input type="checkbox" [(ngModel)]="skill.isProf">
               <label>{{skill.name}}: </label>
            </div>
            <br>
         </div>
      </div>
   `
})

export class AbilityDisplayComponent {
   @Input() stats: Ability[];
   @Input() race: Race;

}
