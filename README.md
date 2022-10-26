# Team-Profile-Generator

https://drive.google.com/file/d/1e8NhM_zuhZRX-x-H1gGZFjOqTkDVHTpJ/view (incomplete)
https://drive.google.com/file/d/1k9Dbyr7w3JHe_5tbhIVQ4u_EX7OWuNW4/view (tests)

## Introduction
This project was to show our ability across all topics covered so far. Combining html, css, javascript, and node.
Users can input information on their team members, starting with the team manager. From there, the user can add engineers and interns to the team.
When they are done adding members, they can finish building the team. A HTML file will then be generated with every member's profile.

## Code Snippet
This facilitates the inquirer prompt to recursively loop.
As long as a new employee is being made, the prompts will repeat with the specified employee role.
```
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
```

## Languages and Technology
HTML<br>
CSS<br>
Javascript<br>
Node.js<br>
npm<br>
Inquirer.js
TailwindCSS
DaisyUI

## Author
[GitHub](https://github.com/PeterKim89)<br>
[LinkedIn](www.linkedin.com/in/peter-kim89)<br>
[Email] Peter.Kim@uconn.edu

## License
[MIT](https://choosealicense.com/licenses/mit/)<br>
Copyright (c) [2022] [Peter Kim]