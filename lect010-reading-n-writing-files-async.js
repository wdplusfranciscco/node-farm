const fs = require('fs');

// Blocking, synchronous Read/Write way from Lecture 8 for comparison. Not to be tested here.
// const textIn = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(textIn);
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

// Non-blocking, asynchronous Read/Write way. Simple example. Try this first by commenting out the version below.
// fs.readFile('./txt/start.txt', 'utf-8', (err, data) => {
//    console.log(data);
// });
// console.log('Will read file!');

// Non-blocking, asynchronous Read/Write way. A little more complicated version. Try this second by commenting out the previous version.
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//     });    
// });
// console.log('Will read file!');

// Non-blocking, asynchronous Read/Write way. And yet more. Try this third by commenting out the previous version.
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
// //         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);
//         });
//     });    
// });
// console.log('Will read file!');

// Non-blocking, asynchronous Read/Write way. Finnaly, let's write to a file. As before, try this by commenting out the previous version.
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            console.log(data3);
            
            fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('Your file has been written 😃');
            });
        });
    });    
});
console.log('Will read file!');