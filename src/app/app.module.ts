import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassDisplayComponent } from './class.component';
import { AbilityDisplayComponent } from './ability.component';
import { RaceDisplayComponent } from './race.component';
import { PlayerDisplayComponent } from './player.component'

@NgModule({
  declarations: [
    AppComponent,
    ClassDisplayComponent,
    AbilityDisplayComponent,
    RaceDisplayComponent,
    PlayerDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
