const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Middleware to allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Create a proxy middleware for the target server
const targetUrl = 'https://api.w2g.tv'; // Replace with your target server URL
const proxyOptions = {
  target: targetUrl,
  changeOrigin: true,
};

const proxy = createProxyMiddleware(proxyOptions);

// Proxy all requests to the target server
app.use('/', proxy);

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});