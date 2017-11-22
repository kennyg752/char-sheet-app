import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { AbilityComponent } from './player/ability/ability.component';
import { ClassComponent } from './player/class/class.component';
import { RaceComponent } from './player/race/race.component';
import { SkillComponent } from './player/ability/skill/skill.component';
import { ArmorComponent } from './player/ability/armor/armor.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    AbilityComponent,
    ClassComponent,
    RaceComponent,
    SkillComponent,
    ArmorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
