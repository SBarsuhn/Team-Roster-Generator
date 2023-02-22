
// These are all of the other required files. The application needs information from these files to run
const inquirer = require("inquirer");
const fs = require("fs")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const generateHtml = require("./src/generateHTML")

// This is just an empty array to put the user input into
const teamArray = []
// This is the list of questions for when the user is creating a card for a person with the role of "Manager"
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
    // This adds that information to a new instance
    const instance = new Manager(data.managername, data.managerID, data.manageremail, data.manageroffice )
    teamArray.push(instance)
    addMember()
})
}
// This is the list of questions for when the user is creating a card for a person with the role of "Engineer"
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
        // This adds that information to a new instance
        const instance = new Engineer(data.engineername, data.engineerID, data.engineeremail, data.engineergit )
        teamArray.push(instance)
        addMember()
    })
    }
    // This is the list of questions for when the user is creating a card for a person with the role of "Intern"
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
             // This adds that information to a new instance
            const instance = new Intern(data.internname, data.internID, data.internemail, data.internschool )
            teamArray.push(instance)
            addMember()
        })
        }
    

// This is the main menu of the application. Here you can select which role you want to create
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
    // This will launch the corresponding function to whatever option you pick
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
    // If you chose to not any new members the index.html will be written and you will get a console log telling you that the team has been created
    console.log("Team created")
    fs.writeFileSync("index.html", generateHtml(teamArray))
  }
})

}
// This function is called here to activate the application when you type "node index.js" in the terminal
addMember()


