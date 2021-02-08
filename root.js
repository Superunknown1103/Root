// packages
import fs from 'fs';
// classes
import { Drivers } from './classes/Driver.js';
import { Errors, ERRORS } from './classes/Error.js';
import { Trips } from './classes/Trip.js';
// variables
const fileToRead = process.argv[2];
const text = fs.readFileSync(fileToRead).toString('utf-8');
const textByLine = text.split("\n").map(t => t.replace('\r', ''));

const DRIVERS = new Drivers;
const TRIPS = new Trips;

textByLine.forEach(e => {
    const command = e.split(' ')[0];
    const driverName = e.split(' ')[1];

    switch (command) {
        case 'Driver':
            if (DRIVERS.drivers && DRIVERS.drivers.find(d => d.name == driverName)) {
                ERRORS.newError(textByLine.findIndex(i => i == e), `Tried to create driver but ${driverName} already exists!`)
            } else {
                DRIVERS.newDriver(driverName)
            }
            break;
        case 'Trip':
            const startTime = e.split(' ')[2];
            const stopTime = e.split(' ')[3];
            const milesDriven = e.split(' ')[4];
            // drivers names come first in the text file, but what if some (human) error caused them to not be sorted correctly? This will handle that scenario.
            const findDriverRecord = DRIVERS.drivers.find(d => d.name == driverName);
            const driver = findDriverRecord ? findDriverRecord : DRIVERS.newDriver(driverName);
            TRIPS.newTrip(driver, startTime, stopTime, milesDriven, textByLine.findIndex(i => i == e))
            break;
        default:
            ERRORS.newError(textByLine.findIndex(i => i == e), `Syntax error. Badly formatted request or unknown command specified.`)
    }
})

// console output
console.log(DRIVERS.generateAllReports());
console.log(ERRORS.generateErrorReport());

// write files
fs.writeFile("output.txt", DRIVERS.generateAllReports().toString().split(',').join('\n'), function(err) {
    if(err) {
        return console.log(err);
    }
});

fs.writeFile('errors.txt', ERRORS.generateErrorReport().toString().split(',').join('\n'), function(err) {
    if(err) {
        return console.log(err);
    }
});