// Virtual Proxy Pattern Example (Lazy Loading)
//Scenario: You want to delay loading a heavy object until it’s really needed — for example, loading a large JSON or database resource.


// heavyObject.js
class HeavyObject {
  constructor() {
    console.log("HeavyObject: Loading data...");
    this.data = Array(1000000).fill("Some large data");
  }

  getData() {
    return this.data[0];
  }
}

// proxyHeavyObject.js
class HeavyObjectProxy {
  constructor() {
    this.realObject = null;
  }

  getData() {
    if (!this.realObject) {
      console.log("Proxy: Creating HeavyObject only when needed...");
      this.realObject = new HeavyObject();
    }
    return this.realObject.getData();
  }
}

// client.js
const proxy = new HeavyObjectProxy();
console.log("Proxy created.");
console.log("Accessing data for the first time:");
console.log(proxy.getData());
