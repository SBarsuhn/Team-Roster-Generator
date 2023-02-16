const inquirer = require("inquirer");
const fs = require("fs")

inquirer
.prompt([
    {
        type:"input",
        message:"What is the team manager's name?",
        name:"manager-name",
    },
    {
        type:"input",
        message:"What is the team manager's Employee ID?",
        name:"manager-ID",
    },
    {
        type:"input",
        message:"What is the team manager's email?",
        name:"manager-email",
    },
    {
        type:"input",
        message:"What is the team manager's office number?",
        name:"manager-office",
    },
])