const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employeeList = [];
// initial manager information prompt
const managerInput = function() {
    inquirer.prompt ([
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
	}
])
    .then(function (name, id, email, officeNumber) {
        let newEmployee = new Manager(name, id, email, officeNumber);
        employeeList.push(newEmployee);
})

    return nextChoice;
};

const engineerInput = function() {
    inquirer.prompt ([
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
    },
    {
		type: "list",
		name: "nextChoice",
		message: "What would you like to do next?",
		choices: ["Add an Engineer", "Add an Intern", "Finish building my team"],
	}
])
    .then(function (name, id, email, github) {
        let newEmployee = new Engineer(name, id, email, github);
        employeeList.push(newEmployee);
    })

    return nextChoice;
};

const internInput = function() {
    inquirer.prompt ([
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
    },
    {
		type: "list",
		name: "nextChoice",
		message: "What would you like to do next?",
		choices: ["Add an Engineer", "Add an Intern", "Finish building my team"],
	}
])
    .then(function (name, id, email, school){ 
        let newEmployee = new Intern(name, id, email, school);
        employeeList.push(newEmployee);
    })

    return nextChoice;
};

// recursive call to keep asking if another employee should be added
const nextEmployee = function(nextChoice) {
    if (nextChoice === "Add an Engineer") {
        nextEmployee(engineerInput);
    }
    else if (nextChoice === "Add an Intern") {
        nextEmployee(internInput);
    }
    else {
        return employeeList;
    }
}

