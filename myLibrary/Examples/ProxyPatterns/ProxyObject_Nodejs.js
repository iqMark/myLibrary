// Proxy Pattern Example in Node.js
// This example demonstrates a simple proxy that logs access to an object's properties.
// The proxy intercepts get operations and logs the property being accessed.
// Usage of Proxy in JavaScript
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
// Create a target object
// Node.js also supports the native Proxy object from ES6:


const target = {
  message: 'Hello'
};

const handler = {
  get: (obj, prop) => {
    console.log(`Accessing ${prop}`);
    return obj[prop];
  }
};

const proxy = new Proxy(target, handler);
console.log(proxy.message); // Logs: Accessing message
