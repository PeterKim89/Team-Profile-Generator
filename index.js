const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerInput = [
	{
		type: "input",
		name: "managerName",
		message: "What is the team manager's name?",
	},
	{
		type: "input",
		name: "managerId",
		message: "What is the team manager's employee ID?",
	},
	{
		type: "input",
		name: "managerEmail",
		message: "What is the team manager's email address?",
	},
	{
		type: "input",
		name: "managerOfficeNumber",
		message: "What is the team manager's office number?",
	},
	{
		type: "list",
		name: "nextChoice",
		message: "What would you like to do next?",
		choices: ["Add an Engineer", "Add an Intern", "Finish building my team"],
	},
];
const engineerInput = [
    {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's id?"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?"
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's github username?"
    }
];
const internInput = [
    {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "internId",
        message: "What is the intern's id?"
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?"
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is the intern's school?"
    }
]


function teamBuilder(answers) {
    const nextChoice = answers.nextChoice;
    const teamBuilderQuestions = [];
    let x = 1;
    while (x === 1) {

    }
}