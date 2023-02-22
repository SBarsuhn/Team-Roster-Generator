const Manager = require("../lib/Manager")

describe("Manager", () => {
// All of these tests are basically the same but they are looking at different things. 
// For example, the first test is checking to make sure that "instance.name" is the same as "name". 
// The reason that this was helpful specifically in this project was because I had forgotten to capitalize a letter in the "getRole" function and it was causing problems.
//  Using tests made it easy to narrow down where the problem was instead of having to comb through every line of code. 
    it("Should take in an office number", () => {
      const office = "113";

      const instance = new Manager("Sam", "56", "example@gmail.com", office);

      expect(instance.office).toBe(office);
    });
    it("getGithub should return Gtihub", () => {
        const office = "113";
  
        const instance = new Manager("Sam", "56", "example@gmail.com", office);
  
        expect(instance.getOffice()).toBe(office);
      });
      it("getRole should return Manager", () => {
        const role = "Manager";
  
        const instance = new Manager("Sam", "56", "example@gmail.com", "113");
  
        expect(instance.getRole()).toBe(role);
      });
})