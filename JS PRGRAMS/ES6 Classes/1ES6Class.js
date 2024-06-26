// Problem statement
// Objective:-

// Create a class called Person with the following properties and methods:



// Properties:-

// - name (string)

// - age (number)

// - gender (string)


// Methods:

// - speak() - logs a message to the console saying "Hello, my name is [name] and I am [age] years old."

// - Create a class called Student with the following properties and methods:

// -Properties:

// 1- person (object) - an object that contains the "name", "age", and "gender" properties of the student
// 2- major (string)
// 3- gpa (number)
// -Methods:

// 1- study() - logs a message to the console saying "I am studying [major] and my GPA is [gpa]."
// 2- speak() - logs a message to the console saying "Hello, my name is [name] and I am [age] years old. I am also a student studying [major]."


// Input :-
// const person1 = new Person("John",20,"M");

// person1.speak();

// const stud1 = new Student(person1,"CS",9);

// stud1.speak();

// stud1.study();


// Output:-
// Hello, my name is John and I am 20 years old.

// Hello, my name is John and I am 20 years old. I am also a student studying CS.

// I am studying CS and my GPA is 9.

function main() {
  class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    speak() {
      console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
    }
  }

  class Student {
    constructor(person, major, gpa) {
      this.person = person;
      this.major = major;
      this.gpa = gpa;
    }

    study() {
      console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`);
    }

    speak() {
      console.log(
        `Hello, my name is ${this.person.name} and I am ${this.person.age} years old. I am also a student studying ${this.major}.`
      );
    }
  }
  return { Person, Student };
}