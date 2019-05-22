class Person{
  private name;
  private age;
}

class Staff extends Person{
  private job;
}

class Manager extends Staff{
  private count;
}

let a:Manager=new Person();
