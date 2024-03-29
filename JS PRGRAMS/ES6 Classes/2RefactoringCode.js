// Problem statement
// For this question, you need to refactor the Car C
// lass and its methods into the constructor 
// function.


// Note:
// Make sure to keep the methods that were initially prototypal as 
// prototype methods and retain the methods that were originally part of the class as 
// regular methods within the constructor function.



function main(){
    function Car (make, model, year, color, mileage){
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.mileage = mileage;
      this.getMake = function(){
        return this.make;
      }
    }
  
    Car.prototype.getModel=function() {
      return this.model;
    }
  
    Car.prototype.getYear=function() {
      return this.year;
    }
  
    Car.prototype.getColor=function() {
      return this.color;
    }
  
    Car.prototype.getMileage=function() {
      return this.mileage;
    }
  
    const myCar = new Car("Toyota", "Camry", 2020, "blue", 5000);
        console.log(myCar.getMake());
        console.log(myCar.getModel());
        console.log(myCar.getYear());
        console.log(myCar.getColor());
        console.log(myCar.getMileage());
        console.log(myCar.drive());
      //Do not modify the return statement;
        return Car;
      }
      main();