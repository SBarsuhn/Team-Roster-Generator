const Intern = require("../lib/Intern")

describe("Intern", () => {
// All of these tests are basically the same but they are looking at different things. 
// For example, the first test is checking to make sure that "instance.name" is the same as "name". 
// The reason that this was helpful specifically in this project was because I had forgotten to capitalize a letter in the "getRole" function and it was causing problems.
//  Using tests made it easy to narrow down where the problem was instead of having to comb through every line of code. 
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