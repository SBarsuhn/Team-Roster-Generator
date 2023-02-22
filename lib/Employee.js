// This is the main class that all of the other classes will inherit from. all of the other classes have these attributes
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

        return this.name

    }

    getId() {
  
        return this.id
    }

    getEmail() {
  
        return this.email

    }

    getRole() {
        return "Employee"
    }
}
// This is here so the infromation from this file can be used in other files
module.exports = Employee