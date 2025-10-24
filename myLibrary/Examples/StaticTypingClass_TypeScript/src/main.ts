import { User } from "./user";
const user = new User(1, "Alice");
console.log(user.greet());

console.log("User name is:", user.name);
// console.log(user.id);  // ❌ Error: Property 'id' is private and only accessible within class 'User'.

    /* start of commented out code for demonstration purposes //////////////////////////////////////

// ❌ Type error: Argument of type 'string' is not assignable to parameter of type 'number'
const badUser = new User("oops", "Bob");
When you run:

npx tsc
TypeScript will catch the error at compile time:

error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// ❌ Type error: Cannot access private member 'id' of class 'User'
console.log(user.id);

    *//// end of commented out code ////////////////////////////////////////////////////////////////