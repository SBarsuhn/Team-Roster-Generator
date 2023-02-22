const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
// All of these tests are basically the same but they are looking at different things. 
// For example, the first test is checking to make sure that "instance.name" is the same as "name". 
// The reason that this was helpful specifically in this project was because I had forgotten to capitalize a letter in the "getRole" function and it was causing problems.
//  Using tests made it easy to narrow down where the problem was instead of having to comb through every line of code. 
  it("Should take in a Github profile", () => {
    const github = "github";

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
});
