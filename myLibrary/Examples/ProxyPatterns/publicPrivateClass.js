class Example_Public {
  publicField = 'I am public';

  publicMethod() {
    console.log('This is a public method');
  }
}

const obj_Public = new Example_Public();
console.log(obj_Public.publicField); // 'I am public'
obj_Public.publicMethod(); // logs: This is a public method







class Example {
  publicField = 'I am public';

  publicMethod() {
    console.log('This is a public method');
  }



  #privateField = 'I am private msg, hidden from outside access';

  #privateMethod() {
    console.log('This is a msg that is for private access only... private');
  }

  accessPrivate() {
    console.log(this.#privateField);
    this.#privateMethod();
  }
}

// >>> Example usage of accessing private members within the class  ***********************
const obj = new Example();
//  console.log(obj.#privateField); // ❌ SyntaxError
//  obj.#privateMethod(); // ❌ SyntaxError

obj.accessPrivate(); // ✅ Works fine

//      Derived class to demonstrate access restrictions
class DerivedExample extends Example {
       tryAccess() {
   //      console.log(this.#privateField); // ❌ SyntaxError
   //      this.#privateMethod(); // ❌ SyntaxError
          }
       }
// The above lines will throw SyntaxError because private fields and methods cannot be accessed in derived classes.  ******<<<*/  

const derivedObj = new DerivedExample();
// derivedObj.tryAccess(); // ❌ SyntaxError
// However, the public method can still be accessed
derivedObj.publicField; // ✅ Works fine
derivedObj.publicMethod(); // ✅ Works fine

derivedObj.accessPrivate(); // ✅ Works fine

// Example usage
obj.accessPrivate(); // prints private field and calls private method
// Output:
// I am private
// This is a msg that is for private access only... private

// The private field and method cannot be accessed directly from outside the class or from derived classes.

// The private field and method cannot be accessed directly from outside the class or from derived classes.
// The private field and method cannot be accessed directly from outside the class or from derived classes.
// The private field and method cannot be accessed directly from outside the class or from derived classes.






