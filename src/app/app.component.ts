import { Component } from '@angular/core';
import { PC } from './player-character';
import { Options } from './options'

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: [`./app.component.css`]
})

export class AppComponent {
   title = 'D&D Character Sheet';

   options: Options = new Options();
   pc: PC = new PC();

   display(toShow: number): string {
      return toShow >= 0 ? "+" + toShow.toString() : toShow.toString();
   }
}
