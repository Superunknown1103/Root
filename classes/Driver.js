export class Driver {
    constructor(name) {
        this.name = name;
        this.trips = [];
    }

    addTrip(trip) {
        this.trips.push(trip)
    }

    totalMiles() {
        return this.trips.map(t => parseInt(t.milesDriven)).reduce((a, b) => a + b, 0);
    }

    averageSpeed() {
        return this.trips.map(t => parseInt(t.speed)).reduce((a, b) => a + b, 0)/this.trips.length;
    }
    
    generateReport() {
        return `${this.name}: ${this.totalMiles()} miles ${this.averageSpeed() > 0 ? `@ ${this.averageSpeed()} mph` : ''}`
    }
}

export class Drivers {
    constructor() {
        this.drivers = [];
    }

    newDriver(name) {
        let d = new Driver(name);
        this.drivers.push(d);
        return d;
    }

    generateAllReports() {
        const sortedDrivers = this.drivers.sort(function (a, b) {
            return b.totalMiles() - a.totalMiles()
        });
        return sortedDrivers.map(d => d.generateReport());
    }
};
