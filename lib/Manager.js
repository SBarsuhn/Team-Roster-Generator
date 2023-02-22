const Employee = require('./Employee')
// This class extends from "Employee", meaing it will inherit "name", "id", and "email", but it will also add "office"
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office;
    }

    getOffice() {
        return this.office
    }
    getRole() {
        return "Manager"
    }
}
// This is here so the infromation from this file can be used in other files
module.exports = Manager