import { Injectable } from '@angular/core';

import { Skill } from './skill';
import { STR } from './mock-skills';
import { DEX } from './mock-skills';
import { CON } from './mock-skills';
import { INT } from './mock-skills';
import { WIS } from './mock-skills';
import { CHA } from './mock-skills';

@Injectable()
export class SkillService {
   getStrSkills(): Skill[] {
      return STR;
   }
   getDexSkills(): Skill[] {
      return DEX;
   }
   getConSkills(): Skill[] {
      return CON;
   }
   getIntSkills(): Skill[] {
      return INT;
   }
   getWisSkills(): Skill[] {
      return WIS;
   }
   getChaSkills(): Skill[] {
      return CHA;
   }
}
