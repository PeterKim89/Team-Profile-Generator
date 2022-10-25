const inquirer = require('inquirer'); 
const fs = require('fs');

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the team manager's employee ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the team manager's email address?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the team manager's office number?"
        },
    ])
}