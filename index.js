
const http = require('http');
const url = require('url');


// The blank lines below are left to follow along more easely with the course,
// since the instructor has some commented out code in this area.
// By keeping it, line numbers of the functional code match
// on both these and the instructor's file.






















////////////////////////////////////////////
// SERVER
const server = http.createServer((req, res) => {
    const pathName = req.url;
    
    if(pathName == '/' || pathName === '/overview') {
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product') {
        res.end('This is the PRODUCT');
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