import { describe } from "node:test";
import { capitalizeFirstsLetter } from "../capitalizeFirstLetter";

describe("capitalizeFirstLetter", () => {
  it("should capitalize first letter", () => {
    expect(capitalizeFirstsLetter("hello")).toBe("Hello");
  });

  it("should return empty string if emptu string is passed", () => {
    expect(capitalizeFirstsLetter("")).toBe("");
  });

  it("should return the same string if the first letter is already capitalized", () => {
    expect(capitalizeFirstsLetter("Hello")).toBe("Hello");
  });

  it("should capitalize the first letter of a sentence", () => {
    expect(capitalizeFirstsLetter("hello world")).toBe("Hello world");
  });
});
