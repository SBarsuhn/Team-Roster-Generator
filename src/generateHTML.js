

// This is a for loop that is used to add the user input into the template literal
function generateHtml(teamArray) {
    let cardArray = ""
    for (let i = 0; i < teamArray.length; i++) {
        if (teamArray[i].getRole() === "Manager") {
            cardArray += makeManager(teamArray[i])
        } else if (teamArray[i].getRole() === "Engineer") {
            cardArray += makeEngineer(teamArray[i])
        } else {
            cardArray += makeIntern(teamArray[i])
        }
    }
    return cardArray
}
// These three functions are the HTML that will will be created when you input the corresponding information into the application
function makeManager(employee) {
    return `
    <div class="card">
            <header class="card-header"> ${employee.getName()} </header>
            <p class="emp-id"> ID: ${employee.getId()}</p>
            <p class="email">Email:<a href="mailto:${employee.getEmail()}"> ${employee.getEmail()}</a></p>
            <p class="office-num">Office: ${employee.getOffice()}</p>
        </div>
    `
}
function makeEngineer(employee) {
    return `
    <div class="card">
            <header class="card-header"> ${employee.getName()} </header>
            <p class="emp-id"> ID: ${employee.getId()}</p>
            <p class="email">Email:<a href="mailto:${employee.getEmail()}"> ${employee.getEmail()}</a></p>
            <p class="github">Github:<a target="_blank" href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>
        </div>
    `
}

function makeIntern(employee) {
    return `
    <div class="card">
            <header class="card-header"> ${employee.getName()} </header>
            <p class="emp-id"> ID: ${employee.getId()}</p>
            <p class="email">Email:<a href="mailto:${employee.getEmail()}"> ${employee.getEmail()}</a></p>
            <p class="school">School: ${employee.getSchool()}</p>
        </div>
    `
}

// This is the boilerplate HTML that will hold all of the "cards" that are created from the previous functions
module.exports = teamArray => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/style.css" />
    <title>My Team</title>
    </head>
<body>
<header class="page-head">MY TEAM</header>
<main>
<div class="card-container">
${generateHtml(teamArray)}
</div>
</div>
</main>
</body>
</html>
`

}