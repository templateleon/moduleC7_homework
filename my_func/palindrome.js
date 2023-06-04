function palindrome(str) {
  if (typeof str !== "string") {
    return false;
  }
  const text = str.toLowerCase().split(" ").join("");
  //   console.log(text);
  const reversText = text.split("").reverse().join("");
  //   console.log(reversText);
  return text === reversText;
}

// console.log(palindrome("А роза упала на лапу Азора"));
export default palindrome;
