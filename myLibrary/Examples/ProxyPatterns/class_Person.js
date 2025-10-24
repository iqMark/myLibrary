// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

// Derived class
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call the parent constructor
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying in grade ${this.grade}.`);
  }
}

// Usage
const alice = new Student("Alice", 14, 9);
alice.introduce(); // Inherited method from Person
alice.study();     // Method from Student
