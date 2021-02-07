// packages
import fs from 'fs';
// classes
import { Driver, Drivers } from './classes/Driver.js';
// variables
const arg = process.argv;
let text = fs.readFileSync("./sample-file.txt").toString('utf-8');
let textByLine = text.split("\n");
console.log(textByLine);

textByLine.forEach(e => {
    switch(e) {
        case 'Driver':
          // code block
          break;
        case 'Trip':
          // code block
          break;
        default:
            // to do: create Error class
          return console.log('Unable to process this entry. Please make sure that your txt file is formatted correctly.')
      }
})




