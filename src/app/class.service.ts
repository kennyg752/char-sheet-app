import { Injectable } from '@angular/core';

import { Class } from './class';
import { CLASSES } from './mock-classes';

@Injectable()
export class ClassService {
   getClasses(): Class[] {
      return CLASSES;
   }
}
