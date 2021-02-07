export class Driver {
    constructor(name) {
        this.name = name;
    }
}

export class Drivers {
    constructor() {
        this.drivers = [];
    }

    newDriver(name) {
        let d = new Driver(name);
        this.drivers.name(d);
        return d;
    }

    allDrivers() {
        return this.drivers;
    }
}
