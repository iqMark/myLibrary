// Real service
class ObjectService {
  constructor() {
    this.location = 'Madrid';
    this.state = 'state one';
  }

  monitoring(data) {
    console.log(`Real Service monitoring data: ${data}`);
    return `Location: ${this.location}, State: ${this.state}`;
  }
}

// Proxy
class MonitoringProxy {
  constructor(realService) {
    this.realService = realService;
  }

  monitoring(data) {
    console.log(`[Proxy] Logging request: ${data}`);
    const result = this.realService.monitoring(data);
    console.log(`[Proxy] Response: ${result}`);
    return result;
  }
}

// Express setup
const express = require('express');
const app = express();
app.use(express.json());

const realService = new ObjectService();
const proxy = new MonitoringProxy(realService);

app.post('/monitoring', (req, res) => {
  const { data } = req.body;
  const result = proxy.monitoring(data);
  res.send({ result });
});

app.listen(3000, () => console.log('Server running on port 3000'));

// To test this service, you can send a POST request to http://localhost:3000/monitoring
// with a JSON body like: { "data": "Sample monitoring data" }      
// The proxy will log the request and response around the real service call.

// Note: This is a simplified example for demonstration purposes. In a production environment,
// you would want to add error handling, validation, and possibly authentication.       
    
// End of Proxy_MonitoringService.js

//  Use Postman or curl to test the service as described in the comments above.



