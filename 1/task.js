//write a function that returns the sum of 3 numbers
function sumOfThreeNumbers(num1, num2, num3) {
  if (
    typeof num1 === "string" ||
    typeof num2 === "string" ||
    typeof num3 === "string"
  ) {
    console.log("please input numbers");
    return;
  }
  return num1 + num2 + num3;
}

// Example usage:
let result = sumOfThreeNumbers(2, 5, 7);
console.log(result); // Output: 14
