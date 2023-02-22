const Employee = require('./Employee')
// This class extends from "Employee", meaing it will inherit "name", "id", and "email", but it will also add "school"
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    getSchool() {
        return this.school
    }
    
    getRole() {
        return "Intern"
    }
}
// This is here so the infromation from this file can be used in other files
module.exports = Intern