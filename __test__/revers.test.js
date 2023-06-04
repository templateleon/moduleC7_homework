import reverseString from "../my_func/revers";
describe("reverseString", () => {
  it("returns reversed string", () => {
    expect(reverseString("abc")).toBe("cba");
    expect(reverseString("123")).toBe("321");
  });

  it("returns false empty string", () => {
    expect(reverseString("")).toBe(false);
    expect(reverseString(123)).toBe(false);
  });
});
