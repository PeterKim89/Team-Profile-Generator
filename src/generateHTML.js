const generateHTML = () => {
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
            <div class="container">
                <div id="employee-cards" class="flex justify-evenly">
                    
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    </html>
    `;
};

const managerCard = (manager) => {
    return `
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">${manager.name}</h2>
            <h2>Manager</h2>
            <h3>ID: ${manager.id}</h3>
            <h3>Email: ${manager.email}</h3>
            <h3>Office Number: ${manager.officeNumber}</h3>            
        </div>
    </div>
    `
}

const engineerCard = (engineer) => {
    return `
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">${engineer.name}</h2>
            <h2>Engineer</h2>
            <h3>ID: ${engineer.id}</h3>
            <h3>Email: ${engineer.email}</h3>
            <h3>Office Number: ${engineer.github}</h3>            
        </div>
    </div>
    `
}

const internCard = (intern) => {
    return `
    <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title">${intern.name}</h2>
            <h2>Intern</h2>
            <h3>ID: ${intern.id}</h3>
            <h3>Email: ${intern.email}</h3>
            <h3>Office Number: ${intern.school}</h3>
        </div>
    </div>
    `
}