class Person{
  private name:string;
  private age:number;

  constructor(name:string, age:number){
    this.name=name;
    this.age=age;
  }
}

let p=new Person('blue', 88);
console.log(p.name);
