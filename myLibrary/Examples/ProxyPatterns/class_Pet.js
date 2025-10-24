
// Base class
class Pet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}


// Example usage
const pet_1 = new Pet('pet#1', 'cat');
pet_1.speak(); // prints: "Milo makes a sound."

const pet_2 = new Pet('pet#2', 'fish');
pet_1.speak(); // prints: "Milo makes a sound."

// Derived class
class Dog extends Pet {
  constructor(name, breed) {
    super(name, "Dog"); // Call the parent constructor with species set to "Dog"
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks. Woof!`);
    return `${this.name} makes a barking sound.`;
  }

  fetch() {
    console.log(`${this.name} is fetching the ball.`);
    return `${this.name} dog can fetch a ball.`;
  }
}

//testing the small Dog class
class SmallDog extends Dog {
  constructor(name, breed) {
    super(name, SmallDog);
    this.size = "Small";
  }   
  speak() {
    console.log(`${this.name} yaps. Yip! Yip!`);
    return `${this.name} makes a yapping sound.`;
  }       
}     


// Usage
const tinypouch = new SmallDog("TinyDoggy", "Mini Dog");
tinypouch.speak();  // Overridden method
console.log(tinypouch.speak());  // Overridden method
tinypouch.fetch();  // Dog-specific method
console.log(tinypouch.fetch());  // Dog-specific method









// Usage
const buddy = new Dog("Buddy", "Golden Retriever");
const macey = new Dog("Macey", "Malshi");


buddy.speak();  // Overridden method
console.log(buddy.speak());  // Overridden method
buddy.fetch();  // Dog-specific method
macey.speak();  // Overridden method
macey.fetch();  // Dog-specific method
console.log(macey.fetch());  // Dog-specific method
