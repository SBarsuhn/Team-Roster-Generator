const Intern = require("../lib/Intern")

describe("Intern", () => {
    it("Should take in a school name", () => {
      const school ="U of M";

      const instance = new Intern("Sam", "56", "example@gmail.com", school);

      expect(instance.school).toBe(school);
    });
    it("getSchool should return school", () => {
        const school = "U of M";
  
        const instance = new Intern("Sam", "56", "example@gmail.com", school);
  
        expect(instance.getSchool()).toBe(school);
      });
      it("getRole should return Intern", () => {
        const role = "Intern";
  
        const instance = new Intern("Sam", "56", "example@gmail.com", "U of M");
  
        expect(instance.getRole()).toBe(role);
      });
})