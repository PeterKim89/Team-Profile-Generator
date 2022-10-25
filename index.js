const inquirer = require('inquirer'); 
const fs = require('fs');



const questions = () => {
    inquirer.prompt([
        // WHEN I start the application
        // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
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
        }
    ])
        // WHEN I enter the team manager’s name, employee ID, email address, and office number
        // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
    
}