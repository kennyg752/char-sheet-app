import { Component, Input } from '@angular/core';
import { Class } from './class';
import { Options } from './options';

@Component({
   selector: 'class-display',
   template: `
      <div>
         <label>Classes: </label>
         <span *ngFor="let class of classes; index as i">
            <select [(ngModel)]="classes[i]">
               <option *ngFor="let option of options" [ngValue]="option">{{option.name}}</option>
            </select>
            <button (click)="remove(i)">-</button>
         </span>
         <button (click)="add()">+</button>
      </div>
      <div>Total Level: {{getTotalLvl()}}</div>
   `
})

export class ClassDisplayComponent {
   @Input() classes: Class[];
   @Input() options: Class[];
   totalLvl: number;

   add(): void {
      this.classes.push(new Class('None', 8));
   }
   remove(index: number): void {
      this.classes.splice(index, 1);
   }
   getTotalLvl(): number {
      this.totalLvl = 0;
      for (var i = 0; i < this.classes.length; i++) {
         this.totalLvl += this.classes[i].lvl;
      }
      return this.totalLvl;
   }
}
