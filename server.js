const http = require('http');
const express = require('express');
const RED = require('node-red');

// Create an Express app
const app = express();

// Create a server
const server = http.createServer(app);

// Create the Node-RED runtime settings
const settings = {
    httpAdminRoot: "/red",
    httpNodeRoot: "/api",
    userDir: "./.nodered/",
    functionGlobalContext: {}  // Pass any global context here
};

// Initialize Node-RED runtime
RED.init(server, settings);

// Serve Node-RED paths
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(8000, function() {
    console.log('Server is running on port 8000');
});

// Start the Node-RED runtime
RED.start();
