import { Injectable } from '@angular/core';

import { Ability } from './ability';
import { ABILITIES } from './mock-abilities';

@Injectable()
export class AbilityService {
   getAbilities(): Ability[] {
      return ABILITIES;
   }
}
