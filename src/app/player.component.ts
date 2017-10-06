import { Component, Input, OnInit } from '@angular/core';

import { PC } from './player';
import { Options } from './options';

import { RaceService } from './race.service';
import { ClassService } from './class.service';
import { AbilityService } from './ability.service';
import { SkillService } from './skill.service';

const STR = 0;
const DEX = 1;
const CON = 2;
const INT = 3;
const WIS = 4;
const CHA = 5;

@Component({
   selector: 'player-display',
   template: `
      <div>
         <div>
            <label>Character Name: </label>
            <input [(ngModel)]="player.name">
         </div>
         <class-display [classes]="player.classes" [options]="options.classes"></class-display>
         <race-display [race]="player.race" [options]="options.races"></race-display>
         <div><!--Derived/Misc. Stats-->
            <div>
               <label>Armor Class: </label>
               <span>{{getArmorClass(player.baseAC)}}</span>
            </div>
            <div>
               <label>Initiative: </label>
               <span>{{display(getMod(1))}}</span>
            </div>
            <div>
               <label>Proficiency Bonus: </label>
               <span>+{{player.profBonus}}</span>
            </div>

            <br>
         </div>
         <ability-display [stats]="player.stat" [race]="player.race"></ability-display>
      </div>
   `,
   providers: [RaceService, ClassService, AbilityService, SkillService],
})

export class PlayerDisplayComponent implements OnInit {
   player: PC;
   options: Options;

   constructor(private raceService: RaceService,
               private classService: ClassService,
               private abilityService: AbilityService,
               private skillService: SkillService)
   {
      this.player = new PC();
      this.options = new Options();
   }

   ngOnInit(): void {
      this.getRaces();
      this.getClasses();
      this.getAbilities();
      this.getSkills();
   }

   getRaces(): void {
      this.options.races = this.raceService.getRaces();
   }
   getClasses(): void {
      this.options.classes = this.classService.getClasses();
   }
   getAbilities(): void {
      this.player.stat = this.abilityService.getAbilities();
   }
   getSkills(): void {
      this.player.stat[STR].skills = this.skillService.getStrSkills();
      this.player.stat[DEX].skills = this.skillService.getDexSkills();
      this.player.stat[CON].skills = this.skillService.getConSkills();
      this.player.stat[INT].skills = this.skillService.getIntSkills();
      this.player.stat[WIS].skills = this.skillService.getWisSkills();
      this.player.stat[CHA].skills = this.skillService.getChaSkills();
   }
   display(toShow: number): string {
      return toShow >= 0 ? "+" + toShow.toString() : toShow.toString();
   }
   getArmorClass(base: number): number {
      return base + this.getMod(1);
   }
   getMod(index: number): number {
      return Math.floor((this.player.stat[index].score - 10 + this.player.race.bonus[index]) / 2);
   }
}
