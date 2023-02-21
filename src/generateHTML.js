


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

function makeManager(employee) {
    return `
    <div class="card">
            <header class="card-header"> ${employee.getName()} </header>
            <p class="emp-id"> ID: ${employee.getId()}</p>
            <p class="email">Email: ${employee.getEmail()}</p>
            <p class="office-num">Office #: ${employee.getOffice()}</p>
        </div>
    `
}
function makeEngineer(employee) {
    return `
    <div class="card">
            <header class="card-header"> ${employee.getName()} </header>
            <p class="emp-id"> ID: ${employee.getId()}</p>
            <p class="email">Email: ${employee.getEmail()}</p>
            <p class="github">Github: ${employee.getGithub()}</p>
        </div>
    `
}

function makeIntern(employee) {
    return `
    <div class="card">
            <header class="card-header"> ${employee.getName()} </header>
            <p class="emp-id"> ID: ${employee.getId()}</p>
            <p class="email">Email: ${employee.getEmail()}</p>
            <p class="school">School: ${employee.getSchool()}</p>
        </div>
    `
}
// return cardArray.join("")
// }

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