// apiService.js
class ApiService {
  async fetchData(url) {
    console.log(`Fetching from: ${url}`);
    // simulate network call
    return new Promise(resolve => setTimeout(() => resolve(`Response from ${url}`), 1000));
  }
}

// proxyApiService.js
class ApiServiceProxy {
  constructor() {
    this.apiService = new ApiService();
    this.cache = {};
  }

  async fetchData(url) {
    if (this.cache[url]) {
      console.log("Returning cached result for:", url);
      return this.cache[url];
    }
    const result = await this.apiService.fetchData(url);
    this.cache[url] = result;
    return result;
  }
}

// client.js
(async () => {
  const proxy = new ApiServiceProxy();

  console.log(await proxy.fetchData("https://api.example.com/users"));
  console.log(await proxy.fetchData("https://api.example.com/users")); // Cached
})();
