const Manager = require("../lib/Manager")

describe("Manager", () => {
    

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