const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    

    it("Should take in a Github profile", () => {
      const github = "Sam";

      const instance = new Engineer("Sam", "56", "example@gmail.com", github);

      expect(instance.github).toBe(github);
    });
    it("getGithub should return Gtihub", () => {
        const github = "github";
  
        const instance = new Engineer("Sam", "56", "example@gmail.com", github);
  
        expect(instance.getGithub()).toBe(github);
      });
      it("getRole should return Engineer", () => {
        const role = "Engineer";
  
        const instance = new Engineer("Sam", "56", "example@gmail.com", "github");
  
        expect(instance.getRole()).toBe(role);
      });
})