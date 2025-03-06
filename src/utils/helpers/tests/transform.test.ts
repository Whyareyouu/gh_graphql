import { expect, describe, it } from "vitest";
import { capitalizeFirstLetter } from "../adapters";

describe("Test function transform", () => {
  it("Check correct value with valid data", () => {
    expect(capitalizeFirstLetter("HELLO")).toBe("Hello");
    expect(capitalizeFirstLetter("WORLD")).toBe("World");
    expect(capitalizeFirstLetter("javascript")).toBe("Javascript");
  });

  it("Check case with invalid data", () => {
    // @ts-ignore
    expect(capitalizeFirstLetter(null)).toBe("");
    // @ts-ignore
    expect(capitalizeFirstLetter(321)).toBe("");
  });
});
