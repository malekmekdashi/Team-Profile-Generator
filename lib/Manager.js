// Create a class for the Manager that inherits the properties and methods from the parent class "Employee" and adds a new property, officeNumber.

const Employee = require('./Employee')

const managerQuestionsArray = [

    {
        type: 'input',
        name: 'name',
        message: "Name of the Manager:"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the your Id number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "Manager Email:"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Manager office number:"
    }

]

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = {Manager, managerQuestionsArray};