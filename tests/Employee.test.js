const Employee = require("../lib/Employee")

describe("Employee", () => {
    

    it("Should take in a name argument", () => {
      const name = "Sam";

      const instance = new Employee(name);

      expect(instance.name).toBe(name);
    });
    
    it("Should take in a ID argument", () => {
        const id = "56";
  
        const instance = new Employee("Sam", id);
  
        expect(instance.id).toBe(id);
      });

      it("Should take in an email argument", () => {
        const email = "example@gmail.com";
  
        const instance = new Employee("Sam", "56", email);
  
        expect(instance.email).toBe(email);
      });
      it("getName should return name", () => {
        const name = "Sam";
  
        const instance = new Employee(name);
  
        expect(instance.getName()).toBe(name);
      });
      it("getID should return id", () => {
        const id = "56";
  
        const instance = new Employee("Sam", id);
  
        expect(instance.getId()).toBe(id);
      });
      it("getEmail should return an email", () => {
        const email = "example@gmail.com";
  
        const instance = new Employee("Sam", "56", email);
  
        expect(instance.getEmail()).toBe(email);
      });
      it("getRole should return Employee", () => {
        const role = "Employee";
  
        const instance = new Employee("Sam", "56", "example@gmail.com");
  
        expect(instance.getRole()).toBe(role);
      });

  });