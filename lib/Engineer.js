// Similar to the Manager class, the Engineer extends the parents class, Employee, and adds a new property, github.

const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;