//Static

class Vehicle {
  static vName = "static Name";
  //constructor
  constructor(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
  }
  //methods
  getDetails() {
    console.log(`
        The ${this.name} is ${this.color} in color.
        It has ${this.wheels} wheels.
        `);
  }
  //static method
  static showMsg() {
    console.log("This is the static method of the class");
  }
}

const v1 = new Vehicle("Car", "blue", 4);
console.log(v1);
Vehicle.showMsg();//static method is only invoked by the class
console.log(Vehicle.vName);
