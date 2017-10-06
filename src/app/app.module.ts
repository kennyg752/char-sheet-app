import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassDisplayComponent } from './class-display.component';
import { AbilityDisplayComponent } from './ability-display.component';
import { RaceDisplayComponent } from './race-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassDisplayComponent,
    AbilityDisplayComponent,
    RaceDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
