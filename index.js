const generateHTML = require('./template');
const inquirer = require("inquirer");
const fs = require("fs");
const {Manager, managerQuestionsArray} = require("./lib/Manager")
const {Engineer, engineerQuestionsArray} = require("./lib/Engineer")
const {Intern, internQuestionsArray} = require("./lib/Intern");

const employeesArray = [];

const init = () => {managerQuestions()}

const managerQuestions = () => {
    return inquirer.prompt(managerQuestionsArray)
    .then((answers) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeesArray.push(answers);
        return employeesPrompt();
    })
};

const engineerQuestions = () => {
    return inquirer.prompt(engineerQuestionsArray)
    .then((answers) => {
        answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeesArray.push(answers);
        return employeesPrompt();
    })
};

const internQuestions = () => {
    return inquirer.prompt(internQuestionsArray)
    .then((answers) => {
        answers = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeesArray.push(answers);
        return employeesPrompt();
    })
};

const employeesPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            choices: ['Engineer', 'Intern', 'done'],
            name: 'role',
            message: 'Please select your role:',  
        }
])
.then(answers => {
    if(answers.role === "Engineer")
    {engineerQuestions();}
    if(answers.role === "Manager")
    {managerQuestions()} 
    if(answers.role === "Intern")
    {internQuestions();}   
    if(answers.role === 'done') {
        let template = generateHTML(employeesArray)
        return writeToFile(template);
    } 
}
)};

const writeToFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
    err ? console.log(err) : console.log(`Success!`)    
    })
    };

init();

