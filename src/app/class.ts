export class Class {
   name: string;
   hitDie: number;
   isActive: boolean;
   lvl: number;
   constructor(name: string, hitDie: number) {
      this.name = name;
      this.hitDie = hitDie;
      this.isActive = false;
      this.lvl = name == 'None' ? 0 : 1;
   }
}
