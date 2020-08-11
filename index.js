// This code adds an api route to the routing logic to retrieve product data in json format.

const fs = require('fs');
const http = require('http');

// Retrieve data during start and buffer it in the dataObj variable for further retrieval.
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// Callback function with the routing logic includes an api route to display json data.
const server = http.createServer((req, res) => {
    const pathName = req.url;
    
    if(pathName == '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');
    } else if (pathName === '/api') {        
        res.writeHead(200, { 'Content-type': 'application/json'});
        res.end(data);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'Hello world'
        });
        res.end('Page not found!');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});