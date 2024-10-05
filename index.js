const fs = require('fs')

console.log('hello there')

console.log(module)

// requiring logger file, which is only the function 'log'
var logger = require('./logger')

// returns the object that is targeted in the module. the plugs in the argument for message which is "my name is charlie"
// so ultimately you are using the logger file's function with this new argument 
logger('my name is charlie')

// if you exported as an object with a property then use this:
// logger.log('my name is charlie')

// reading the simple text file and then updating it (changing 'code' to 'write')
fs.readFile('./simple.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)

    const updatedData = data.replace('code', 'write');

    fs.writeFile('./simple.txt', updatedData, (err) => {
        if (err) {
            console.error('Error updating file:', err);
            return;
        }
        console.log('File has been updated.');

        // Here we are appending new information to the file. 
        // We are nesting this append function within the write file so that it does not get completed first (node is asynchronous)
        const newInfo = 'I am a musician that is learning how to play new instruments'

        fs.appendFile('./simple.txt', newInfo, (err) => {
            if (err) {
                console.error('Error appending to file', err);
                return;
            }
            console.log('Data has been appended to the file')
        })
    });
}) 
