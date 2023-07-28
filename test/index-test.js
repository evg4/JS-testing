const assert = require("assert");
const myObject = require("../index");

describe("myObject", () => {
  describe(".firstLetter", () => {
    it("returns the first letter of each word in an array as a string", () => {
      const inputArr = ["hello", "animal", "theatre"];
      const expected = "hat";
      const actual = myObject.firstLetter(inputArr);

      assert.strictEqual(expected, actual);
    });
    it("returns the first letter of each element in a different array", () => {
      const inputArr = ["ball", "invisible", "gnat"];
      const expected = "big";
      const actual = myObject.firstLetter(inputArr);

      assert.strictEqual(expected, actual);
    });

    it("logs an error if the input was not an array", () => {
      const input = "word";
      const actual = () => {
        myObject.firstLetter(input);
      };
      assert.throws(actual, /input should be array/);
    });

    it("logs an error if the input was not an array of strings", () => {
      const input = [2, -12, 568];
      const actual = () => {
        myObject.firstLetter(input);
      };
      assert.throws(actual, /input should be array of strings/);
    });
  });
});
