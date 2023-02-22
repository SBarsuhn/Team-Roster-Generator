const Employee = require('./Employee')
// This class extends from "Employee", meaing it will inherit "name", "id", and "email", but it will also add "github"
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }
}
// This is here so the infromation from this file can be used in other files
module.exports = Engineer
