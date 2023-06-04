function reverseString(str) {
  if (typeof str !== "string") {
    // console.log("Введенный тип данных не является срокой");
    return false;
  } else if (str === "") {
    // console.log("Пустая строка");
    return false;
  } else {
    return str.split("").reverse().join("");
  }
}

// console.log(reverseString(""));
export default reverseString;
