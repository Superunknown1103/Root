import { Errors, ERRORS } from './Error.js';

export class Trip {
    constructor(driver, startTime, stopTime, milesDriven, speed) {
       this.driver = driver,
       this.startTime = startTime,
       this.stopTime = stopTime,
       this.milesDriven = Math.round(milesDriven);
       this.speed = Math.round(speed);
    }
}

export class Trips {
    constructor() {
        this.trips = [];
    }

    newTrip(driver, startTime, stopTime, milesDriven, inputIndex) {
        const speed = this.calcSpeed(startTime, stopTime, milesDriven)
        if (speed > 5 && speed < 100) {
            let t = new Trip(driver, startTime, stopTime, milesDriven, speed);
            this.trips.push(t);
            driver.addTrip(t);
            return t;
        } else {
            ERRORS.newError(inputIndex, `Mph validation failed, speed was below 5 mph or over 100 mph.`)
        }
    }

    calcSpeed(startTime, endTime, milesDriven){
        // lets get minutes time first
        function calcMinutes(time) {
            const hr = parseInt(time.split(':')[0]);
            const min = parseInt(time.split(':')[1]);
            // total in minutes
            return (hr * 60) + min;
        }

        // total minutes driving
        const driveTime = calcMinutes(endTime) - calcMinutes(startTime);
        // total hrs driving
        let totalHrs = driveTime/60;
        // formula for mph is r = d/t
        return milesDriven/totalHrs;
    }
}
