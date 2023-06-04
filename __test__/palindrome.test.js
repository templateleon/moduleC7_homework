import palindrome from "../my_func/palindrome";

describe("palindrome", () => {
  it("returns true or false for palindrome string", () => {
    expect(palindrome("abc cba")).toBeTruthy();
    expect(palindrome("abc abc")).toBeFalsy();
    expect(palindrome(123)).toBeFalsy();
  });
});
