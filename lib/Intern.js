// Similar to the previous classes, the Intern class inherits from the parent class, Employee, and adds a new property, school.

const Employee = require("./Employee")

const internQuestionsArray = [
    {
        type: 'input',
        name: 'name',
        message: `Please enter the interns's name:`
    },
    {
        type: 'input',
        name: 'id',
        message: `Please enter the interns's Id number:`
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter the interns's email:`
    },
    {
        type: 'input',
        name: 'github',
        message: `Please enter the interns's school:`
    }
]

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

module.exports = {Intern, internQuestionsArray};