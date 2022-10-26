const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employeeList = [];

// initial manager information prompts
const managerInput = () => {
	return inquirer
		.prompt([
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
				choices: [
					"Add an Engineer",
					"Add an Intern",
					"Finish building my team",
				],
			},
		])
		// make a new Manager and push it to the employee array
		// calls nextEmployee() with user input to add other employees or end the function

		// .then((answers) => {
		// 	let newEmployee = new Manager(
		// 		answers.managerName,
		// 		answers.managerId,
		// 		answers.managerEmail,
		// 		answers.managerOfficeNumber
		// 	);
		// 	employeeList.push(newEmployee);
		// 	console.log(employeeList);
		// 	nextEmployee(answers.nextChoice);
		// });
};

// prompts for making an engineer
const engineerInput = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "engineerName",
				message: "What is the engineer's name?",
			},
			{
				type: "input",
				name: "engineerId",
				message: "What is the engineer's id?",
			},
			{
				type: "input",
				name: "engineerEmail",
				message: "What is the engineer's email?",
			},
			{
				type: "input",
				name: "engineerGithub",
				message: "What is the engineer's github username?",
			},
			{
				type: "list",
				name: "nextChoice",
				message: "What would you like to do next?",
				choices: [
					"Add an Engineer",
					"Add an Intern",
					"Finish building my team",
				],
			},
		])
		// create new engineer with user answers
		// pushes engineer to the employee list
		// then calls nextEmployee() with user's chosen input to either continue or end the function
		.then((answers) => {
			// console.log("What on earth");
			let newEmployee = new Engineer(
				answers.engineerName,
				answers.engineerId,
				answers.engineerEmail,
				answers.engineerGithub
			);
			employeeList.push(newEmployee);
			// console.log(employeeList);
			nextEmployee(answers.nextChoice);
		});
};

// prompts for making an intern
const internInput = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "internName",
				message: "What is the intern's name?",
			},
			{
				type: "input",
				name: "internId",
				message: "What is the intern's id?",
			},
			{
				type: "input",
				name: "internEmail",
				message: "What is the intern's email?",
			},
			{
				type: "input",
				name: "internSchool",
				message: "What is the intern's school?",
			},
			{
				type: "list",
				name: "nextChoice",
				message: "What would you like to do next?",
				choices: [
					"Add an Engineer",
					"Add an Intern",
					"Finish building my team",
				],
			},
		])
		// create new intern with user answers
		// pushes intern to the employee list
		// then calls nextEmployee() with user's chosen input to either continue or end the function
		.then((answers) => {
			let newEmployee = new Intern(
				answers.internName,
				answers.internId,
				answers.internEmail,
				answers.internSchool
			);
			employeeList.push(newEmployee);
			nextEmployee(answers.nextChoice);
		});
};

// conditional for adding an engineer, intern, or ending the prompt
const nextEmployee = (nextChoice) => {
	if (nextChoice === "Add an Engineer") {
		console.log("Engineer attempted");
		engineerInput();
	} else if (nextChoice === "Add an Intern") {
		console.log("Intern attempted");
		internInput();
	} else {
		// console.log(employeeList);
		const employeeCards = employeeList.join('');
        return employeeCards;
	}
};

const generateHTML = (employeeCards) => {
	return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>  
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.33.0/dist/full.css" rel="stylesheet" type="text/css" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
        <header>
            <div id="navbar" class="navbar-center">
                <a id="navbar-text" class="btn btn-ghost normal-case text-xl">Team Profiles</a>
            </div>
        </header>
        <main>
            <div class="card">
                <div id="employee-cards" class="flex justify-evenly">
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    </html>
    `;
};

function writeFile(fileName, data) {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Team Profile index.html has been created in the dist folder.");
        }
    })
};

// initializes the command line input
function init() {

	managerInput()

    .then(answers => {
        console.log(answers)
    })

    // .then(answers => {
    //     // const employeeCards = employeeList.join('')
    //     generateHTML(answers)
    // })

    // .then((html) => {
    //     return writeFile(html);
    // })

    // .catch (err => {
    //     console.log(err);
    // })
};

init();
