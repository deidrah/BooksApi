const formatFullname = require("../formatFullname.js");
const expect = require("chai").expect;
describe("formatFullName", () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal("Error");
    expect(formatFullname(12)).to.equal("Error");
    expect(formatFullname({})).to.equal("Error");
    expect(formatFullname([])).to.equal("Error");
    expect(formatFullname(function () {})).to.equal("Error");
  });
  it("should return an error if there is no arg", () => {
    expect(formatFullname()).to.equal("Error");
  });
  it("should return <firstName> and <lastName>", () => {
    expect(formatFullname("anna balon")).to.equal("Anna Balon");
    expect(formatFullname("anna BALON")).to.equal("Anna Balon");
    expect(formatFullname("ANNA BALON")).to.equal("Anna Balon");
  });
  it('should return an error if "fullName" conains only one word', () => {
    expect(formatFullname("one")).to.equal("Error");
  });
  it('should return an error if "fullName" conains more then two words', () => {
    expect(formatFullname("one two three")).to.equal("Error");
    expect(formatFullname("one two three four five")).to.equal("Error");
  });
});