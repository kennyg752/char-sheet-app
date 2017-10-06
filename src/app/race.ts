export class Race {
   name: string;
   size: string;
   speed: number;
   bonus: number[];
   constructor(name: string, size: string, speed: number, bonus: number[]) {
      this.name = name;
      this.size = size;
      this.speed = speed;
      this.bonus = bonus;
   }
}
