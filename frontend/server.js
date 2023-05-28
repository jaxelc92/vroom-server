const http = require('http');
const { exec } = require('child_process');

// Create a basic HTTP server using Node.js
const server = http.createServer((req, res) => {
  if (req.url === 'examen.html' && req.method === 'POST') {
    exec('node script.js ', (error, stdout, stderr) => 
{
      if (error) {
        console.error('Error executing script:', error);
        res.statusCode = 500;
        res.end('Error executing script');
      } else {
        console.log('Script executed successfully');
        res.statusCode = 200;
        res.end(stdout);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
