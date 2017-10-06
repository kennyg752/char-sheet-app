export class Class {
   name: string;
   hitDie: number;
   isActive: boolean;
   level: number;
   constructor(name: string, hitDie: number) {
      this.name = name;
      this.hitDie = hitDie;
      this.isActive = false;
      this.level = name == 'None' ? 0 : 1;
   }
}
