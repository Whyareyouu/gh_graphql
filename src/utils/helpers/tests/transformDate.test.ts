import { expect, describe, it } from "vitest";
import { getFullDate, getMonthNameByNumber } from "../transformDate";

describe("Test function getMonthNameByNumber", () => {
  it("Check correct month name by month number", () => {
    expect(getMonthNameByNumber(1)).toBe("Jan");
    expect(getMonthNameByNumber(12)).toBe("Dec");
  });

  it("Month name when incorrect number", () => {
    expect(getMonthNameByNumber(13)).toBe("");
    expect(getMonthNameByNumber(0)).toBe("");
  });
});

describe("Test function getFullDate", () => {
  it("Correct full date", () => {
    expect(getFullDate({ day: 1, month: 12, year: 2023 })).toBe("1 Dec, 2023");
  });

  it("Not full object or incorrect field format", () => {
    // @ts-expect-error
    expect(getFullDate({})).toBe("unknown");
    // @ts-expect-error
    expect(getFullDate({ day: 12, month: "12", year: 2023 })).toBe("unknown");
    // @ts-expect-error
    expect(getFullDate({ day: "12", month: 12, year: "2023" })).toBe("unknown");
    //@ts-expect-error
    expect(getFullDate({ day: 12, year: 2023 })).toBe("unknown");
  });

  it("More then max or less then min values", () => {
    expect(getFullDate({ day: 32, month: 12, year: 2023 })).toBe("unknown");
    expect(getFullDate({ day: 12, month: 13, year: 2013 })).toBe("unknown");
    expect(getFullDate({ day: 12, month: 12, year: 2125 })).toBe("unknown");
    expect(getFullDate({ day: 12, month: 12, year: 1962 })).toBe("unknown");
  });
});
