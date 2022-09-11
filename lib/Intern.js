// Similar to the previous classes, the Intern class inherits from the parent class, Employee, and adds a new property, school.

const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern"
    }

    getSchool() {
        return this.school
    }
}

module.exports = Intern