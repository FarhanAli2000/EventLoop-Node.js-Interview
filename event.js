const fs = require('fs');

setTimeout(() => {
    console.log('This is executed by setTimeout.');
}, 0);

setImmediate(() => {
    console.log('This is executed by setImmediate.');
});

fs.readFile('file.txt', (err, data) => {
    console.log('This is executed after reading a file.');
});

console.log('This is executed first.');
