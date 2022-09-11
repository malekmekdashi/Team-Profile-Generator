const generateHTML = require("./src/generateHTML")
const inquirer = require("inquirer")
const fs = require("fs")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const questions = () => {
    return inquirer.prompt([       
        {
            type: 'input',
            name:'name',
            message: 'Please enter your name:'
        },
        {
            type: 'input',
            name:'id',
            message: 'please enter your ID number:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'please enter your email:'
        }, 
        {
            type: 'list',
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'role',
            message: 'Please select your role:'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your office number:'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do you attend?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'please enter your github username'
        }
])
.then(employeeInfo => {
    let {name, id, email, role, github, school, officeNumber} = employeeInfo;
    let employee;
    
    if(role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee) 
        } else if(role === "Manager") {
            employee = new Manager (name, id, email, officeNumber);
            console.log(employee);
        } else(role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee)
        }
})}

const writeToFile = data => {
    return new promises(() => {
        fs.writeFile('./dist/index.html', data, err => {
            err ? console.log(err) : console.log(`Success!`)
        })
    }
}
