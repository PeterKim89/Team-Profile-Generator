const inquirer = require("inquirer");
const fs = require("fs");
const generateCards = require('./src/generateHTML')
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
			
		])
		// make a new Manager and push it to the employee array
		// calls nextEmployee() with user input to add other employees or end the function

		.then((answers) => {
			let newEmployee = new Manager(
				answers.managerName,
				answers.managerId,
				answers.managerEmail,
				answers.managerOfficeNumber
			);
			employeeList.push(newEmployee);
			
		});
};

// // prompts for making an engineer
// const engineerInput = () => {
// 	return inquirer
// 		.prompt([
// 			{
// 				type: "input",
// 				name: "engineerName",
// 				message: "What is the engineer's name?",
// 			},
// 			{
// 				type: "input",
// 				name: "engineerId",
// 				message: "What is the engineer's id?",
// 			},
// 			{
// 				type: "input",
// 				name: "engineerEmail",
// 				message: "What is the engineer's email?",
// 			},
// 			{
// 				type: "input",
// 				name: "engineerGithub",
// 				message: "What is the engineer's github username?",
// 			},
// 		])
// 		// create new engineer with user answers
// 		// pushes engineer to the employee list
// 		// then calls nextEmployee() with user's chosen input to either continue or end the function
// 		.then((answers) => {
// 			// console.log("What on earth");
// 			let newEmployee = new Engineer(
// 				answers.engineerName,
// 				answers.engineerId,
// 				answers.engineerEmail,
// 				answers.engineerGithub
// 			);
// 			employeeList.push(newEmployee);
// 			// console.log(employeeList);
// 			return nextEmployee(answers.nextChoice);
// 		});
// };



// // prompts for making an intern
// const internInput = () => {
// 	return inquirer
// 		.prompt([
// 			{
// 				type: "input",
// 				name: "internName",
// 				message: "What is the intern's name?",
// 			},
// 			{
// 				type: "input",
// 				name: "internId",
// 				message: "What is the intern's id?",
// 			},
// 			{
// 				type: "input",
// 				name: "internEmail",
// 				message: "What is the intern's email?",
// 			},
// 			{
// 				type: "input",
// 				name: "internSchool",
// 				message: "What is the intern's school?",
// 			},
			
// 		])
// 		// create new intern with user answers
// 		// pushes intern to the employee list
// 		// then calls nextEmployee() with user's chosen input to either continue or end the function
// 		.then((answers) => {
// 			let newEmployee = new Intern(
// 				answers.internName,
// 				answers.internId,
// 				answers.internEmail,
// 				answers.internSchool
// 			);
// 			employeeList.push(newEmployee);
// 			return nextEmployee(answers.nextChoice);
// 		});
// };

const nextEmployeeTest = () => {
    return inquirer.prompt ([
    {
        type: "list",
        name: "nextChoice",
        message: "What would you like to do next?",
        choices: [
            "Add an Engineer",
            "Add an Intern",
        ],
    },
    {
        type: "input",
        name: "employeeName",
        message: "What is the employee's name?",
    },
    {
        type: "input",
        name: "employeeId",
        message: "What is the employee's id?",
    },
    {
        type: "input",
        name: "employeeEmail",
        message: "What is the employee's email?",
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's github username?",
        when(answers) {
            return answers.nextChoice === "Add an Engineer";
        }
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is the intern's school?",
        when(answers) {
            return answers.nextChoice === "Add an Intern";
        }
    },
    {
        type: "confirm",
        name: "confirmNewEmployee",
        message: "Do you want to add another employee?"
    },
])
    .then(answers => {
        let employee;
        if (answers.nextChoice === "Add an Engineer") {
            employee = new Engineer (answers.employeeName, answers.employeeId, answers.employeeEmail, answers.engineerGithub);

        }
        else if (answers.nextChoice === "Add an Intern") {
            employee = new Intern (answers.employeeName, answers.employeeId, answers.employeeEmail, answers.internSchool);
        }
        employeeList.push(employee);

        if (answers.confirmNewEmployee) {
            return nextEmployeeTest();
        }
        else {
            return employeeList;
        }
    })
};

// // conditional for adding an engineer, intern, or ending the prompt
// const nextEmployee = (nextChoice) => {
// 	if (nextChoice === "Add an Engineer") {
// 		console.log("Engineer attempted");
// 		engineerInput();
// 	} else if (nextChoice === "Add an Intern") {
// 		console.log("Intern attempted");
// 		internInput();
// 	} else {
//         return employeeList;
// 		// console.log(employeeList);
// 		// const employeeCards = employeeList.join('');
//         // console.log(employeeCards);
//         // console.log("*************")
//         // return employeeCards;
// 	}
// };

function writeFile(data) {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            console.log(err);
            return;
        }
        else {
            console.log("Team Profile index.html has been created in the dist folder.");
        }
    })
};

// initializes the command line input
function init() {

	managerInput()
    .then (nextEmployeeTest)

    .then(employeeList => {
        // console.log(employeeList)
        return generateCards(employeeList)
    })

    .then(html => {
        return writeFile(html);
    })

    .catch (err => {
        console.log(err);
    })
};

init();
