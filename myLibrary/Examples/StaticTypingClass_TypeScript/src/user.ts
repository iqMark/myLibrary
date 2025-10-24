export class User {
   private id: number;        // private means only accessible within this class
  //public id: number;        // public means accessible from anywhere  
  public name: string;       // public by default
constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
greet(): string {
    return `Hello, ${this.name}!`;
  }
}
