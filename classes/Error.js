export class Error {
    constructor(errLine, errMsg) {
        this.errLine = errLine,
            this.errMsg = errMsg
    }
};

export class Errors {
    constructor() {
        this.errors = [];
    }

    newError(errLine, errMsg) {
        let e = new Error(errLine, errMsg);
        this.errors.push(e);
        return e;
    }

    allErrors() {
        return this.errors;
    }

    generateErrorReport() {
        if (this.errors.length > 0) {
            return `Code ran with ${this.errors.length} error(s).`, `\n`, `Detailed Report: `, '\n',
            `${this.errors.map(e => `On File Line ${e.errLine}: ${e.errMsg}`)}`;
        } else {
            return `Code ran with 0 errors.`;
        }
    }
};

export const ERRORS = new Errors;
