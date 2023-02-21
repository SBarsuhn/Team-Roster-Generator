const inquirer = require("inquirer");
const fs = require("fs")
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const generateHtml = require("./src/generateHTML")


const teamArray = []

function promptManager() {
inquirer
.prompt([
    {
        type:"input",
        message:"What is the team manager's name?",
        name:"managername",
    },
    {
        type:"input",
        message:"What is the team manager's Employee ID?",
        name:"managerID",
    },
    {
        type:"input",
        message:"What is the team manager's email?",
        name:"manageremail",
    },
    {
        type:"input",
        message:"What is the team manager's office number?",
        name:"manageroffice",
    },
]).then (data => {
    const instance = new Manager(data.managername, data.managerID, data.manageremail, data.manageroffice )
    teamArray.push(instance)
    console.log(teamArray)
    addMember()
})
}
function promptEngineer() {
    inquirer
    .prompt([
        {
            type:"input",
            message:"What is the engineer's name?",
            name:"engineername",
        },
        {
            type:"input",
            message:"What is the engineer's Employee ID?",
            name:"engineerID",
        },
        {
            type:"input",
            message:"What is the engineer's email?",
            name:"engineeremail",
        },
        {
            type:"input",
            message:"What is the engineer's Github username?",
            name:"engineergit",
        },
    ]).then (data => {
        const instance = new Engineer(data.engineername, data.engineerID, data.engineeremail, data.engineergit )
        teamArray.push(instance)
        console.log(teamArray)
        addMember()
    })
    }
    function promptIntern() {
        inquirer
        .prompt([
            {
                type:"input",
                message:"What is the Intern's name?",
                name:"internname",
            },
            {
                type:"input",
                message:"What is the intern's Employee ID?",
                name:"internID",
            },
            {
                type:"input",
                message:"What is the intern's email?",
                name:"internemail",
            },
            {
                type:"input",
                message:"What is the intern's school?",
                name:"internschool",
            },
        ]).then (data => {
            const instance = new Intern(data.internname, data.internID, data.internemail, data.internschool )
            teamArray.push(instance)
            console.log(teamArray)
            addMember()
        })
        }
    


function addMember() {
inquirer
.prompt([
    {
    type:"list",
    message:"Do you want to add a team member?",
    name:"addmember",
    choices:[
        "Manager", new inquirer.Separator(),
        "Engineer", new inquirer.Separator(),
        "Intern", new inquirer.Separator(),
        "None", new inquirer.Separator(),
    ]
}
]).then (data => {
    if (data.addmember === "Manager") {
promptManager()
    }
    else if (data.addmember === "Engineer") {
        promptEngineer()
    
    }
    else if (data.addmember === "Intern") {
        promptIntern()
    
    }
  else {
    console.log("Team created")
    console.log(teamArray)
    fs.writeFileSync("index.html", generateHtml(teamArray))
  }
})

}

addMember()


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated