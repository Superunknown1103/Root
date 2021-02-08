import chai from 'chai'
import Root from '../root.js'
import { Drivers, Driver } from '../classes/Driver.js';
import { Trips, Trip } from '../classes/Trip.js';
const assert = chai.assert;

describe('Root', function() {
    it('textByLine should be an array', function() {
        let result = Root.textByLine;
        assert.typeOf(result, 'array')
    });
});

describe('Root', function() {
    it('textByLine should have at least one Driver command', function() {
        let result = Root.textByLine.toString();
        assert.include(result, 'Driver')
    });
});

describe('Drivers', function() {
    it('DRIVERS should be an instance of Drivers class', function() {
        let result = Root.DRIVERS
        assert.instanceOf(result, Drivers)
    });
});

describe('Drivers', function() {
    it('DRIVERS should be sorted by most miles driven to least', function() {
        let result = Root.DRIVERS.generateAllReports().map(i => parseInt(i.split(' ')[1]));
        assert.isBelow(result[result.length - 1], result[0])
    });
});


describe('Drivers', function() {
    it('DRIVERS.drivers array should contain at least one Driver', function() {
        let result = Root.DRIVERS.drivers[0];
        assert.instanceOf(result, Driver)
    });
});

describe('Trips', function() {
    it('TRIPS should be an instance of Trips class', function() {
        let result = Root.TRIPS
        assert.instanceOf(result, Trips)
    });
});

describe('Trips', function() {
    it('TRIPS.trips array should contain at least one Trip', function() {
        let result = Root.TRIPS.trips[0];
        assert.instanceOf(result, Trip)
    });
});

describe('Trips', function() {
    it('There should not be any trips with an average speed less than 5 mph or more than 100 mph', function() {
        let result = Root.TRIPS.trips.map(t => t.speed)
        result.forEach(i => assert.isBelow(i, 100) && assert.isAbove(i, 5))
    });
});

describe('Trips', function() {
    it('All Trips should have an average speed', function() {
        let result = Root.TRIPS.trips;
        result.forEach(i => assert.isAbove(i.speed, 0));
    });
});

describe('Trips', function() {
    it('calcSpeed method correctly calculates mph', function() {
        let result = Root.TRIPS.calcSpeed('00:00', '01:00', '60')
        assert.equal(result, 60);
    });
});
