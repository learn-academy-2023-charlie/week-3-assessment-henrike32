// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// describe('fibNum', () => {
//   it("gives six Fibonacci numbers in an array", () => {
//     expect(fibNum(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(fibNum(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })
// ReferenceError: fibNum is not defined
// b) Create the function that makes the test pass.

// pseudocode ->
// input - number
// output - array with the desired Fibonacci number

// process ->
// create a function named 'fibNum' 
// use conditionals statements to setup the base arguments
// for loop  is going to be used to iterate through an array 
// create a variable named 'fibArray 'with specified values to make the final result possible
// the .push() built in method to push the desired numbers into 'fibArray'
// 
const fibNum= (n) => {
  if (n <= 0){
    return [];
  } else if ( n === 1){
    return [1];
  } else if ( n === 2){
    return [1, 1];
  } else {
    const fibArray = [1, 1];
    for (let i = 2; i < n; i++) {
      fibArray.push(fibArray[i-1]+fibArray[i-2]);
    }
    return fibArray;
  }}
  console.log(fibNum(fibLength1));
  console.log(fibNum(fibLength2));

  // output: [ 1, 1, 2, 3, 5, 8 ] and [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
