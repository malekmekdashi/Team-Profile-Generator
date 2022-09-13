// Similar to the Manager class, the Engineer extends the parents class, Employee, and adds a new property, github.

const Employee = require('./Employee')

const engineerQuestionsArray = [
    {
        type: 'input',
        name: 'name',
        message: `Please enter the engineer's name:`
    },
    {
        type: 'input',
        name: 'id',
        message: `Please enter the engineer's Id number:`
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter the engineer's email:`
    },
    {
        type: 'input',
        name: 'github',
        message: `Please enter the engineer's github username:`
    }
]

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

module.exports = {Engineer, engineerQuestionsArray};