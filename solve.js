//1. Sum of Two Numbers:
//Problem: Write a function sumTwoNumbers that takes two numbers as
//arguments and returns their sum.

// Define the function sumTwoNumbers
function sumTwoNumbers(num1, num2) {
    // Calculate the sum of the two numbers
    const sum = num1 + num2;
    // Return the result
    return sum;
}

// Example usage of the function
const result = sumTwoNumbers(5, 10);
console.log(result); // Output: 15

// 2. Check Even or Odd:
//Problem: Write a function isEven that takes a number as an argument
//and returns true if the number is even and false if it is odd

// Define the function isEven
function isEven(number) {
    // Check if the number is divisible by 2 with no remainder
    return number % 2 === 0;
}

// Example usage of the function
console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false


//3. Reverse a String:
//Problem: Write a function reverseString that takes a string as an
//argument and returns the string reversed.

// Define the function reverseString
function reverseString(str) {
    // Convert the string to an array of characters, reverse the array, and join it back into a string
    return str.split('').reverse().join('');
}

// Example usage of the function
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"


//4. Find the Maximum:
//Problem: Write a function findMax that takes an array of numbers as
//an argument and returns the largest number in the array.

// Define the function findMax
function findMax(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
        throw new Error("Array cannot be empty");
    }
    // Use the Math.max function with the spread operator to find the maximum number
    return Math.max(...numbers);
}

// Example usage of the function
console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
console.log(findMax([-10, -5, -3, -1])); // Output: -1



