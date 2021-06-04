export class Todo {
  id: number;
  name: string;
  completed: boolean;

  constructor(_name: string) {
    this.name = _name;
    this.id = Math.random();
    this.completed = false;
  }
}
