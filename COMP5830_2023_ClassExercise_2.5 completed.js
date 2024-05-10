/*
        COMP5830: An Introduction to Programming and Web Technologies
        Lecturers: Elena Botoeva & Kemi Ademoye

        CLASS EXERCISE: JAVASCRIPT
        Topic: Functions and Strings
*/


/*
        EXERCISE 5a
        ~~~~~~~~~~~~~~~~~~~~~~~~~~  
        The alphabetical value of a string is calculated by adding the alphabetical position of each of the letters that make up the string (it doesn't matter if it is lowercase or uppercase, the values are the same). 
                Letter "a" = 1, Letter "b" = 2, ..., Letter "z" = 26
                
        For example, the name 'Jane' has the alphabetical value: 
                10 + 1 + 14 + 5 = 30

        1. Write a function called GetAlphabetValue. 
        2. It should accept a string parameter called str.
        3. Add the following variable declaration to the function:
            let alphabet = "abcdefghijklmnopqrstuvwxyz";


        4. Using the alphabet variable, the function should calculate and the 'alphabetical value' of the str parameter passed to the function.

        5. Return the alphabet value from the function
*/


function GetAlphabetValue(str) {
        // Define the alphabet variable
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
      
        // Convert the input string to lowercase to ensure case insensitivity
        str = str.toLowerCase();
      
        // Initialise a variable to store the alphabetical value
        let alphabetValue = 0;
      
        // Loop through each character in the input string
        for (let i = 0; i < str.length; i++) {
          // Find the position of the character in the alphabet
          let position = alphabet.indexOf(str[i]) + 1;
      
          // If the character is in the alphabet, add its position to the total value
          if (position > 0) {
            alphabetValue += position;
          }
        }
      
        // Return the calculated alphabetical value
        return alphabetValue;
      }
      
      // Example usage:
      var name = 'Jane';
      var value = GetAlphabetValue(name);
      console.log(`The alphabetical value of '${name}' is ${value}`);
      

/*
        EXERCISE 5b
        ~~~~~~~~~~~~~~~~~~~~~~~~~~ 

        6. Test the function with your name, and display the output to the console in the following format:

            My name, ..., has an alphabet value of: ...
*/
  
function GetAlphabetValue(str) {
        // Define the alphabet variable
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
      
        // Convert the input string to lowercase to ensure case insensitivity
        str = str.toLowerCase();
      
        // Initialize a variable to store the alphabetical value
        let alphabetValue = 0;
      
        // Loop through each character in the input string
        for (let i = 0; i < str.length; i++) {
          // Find the position of the character in the alphabet
          let position = alphabet.indexOf(str[i]) + 1;
      
          // If the character is in the alphabet, add its position to the total value
          if (position > 0) {
            alphabetValue += position;
          }
        }
      
        // Return the calculated alphabetical value
        return alphabetValue;
      }
      
      // Example usage:
      const name = 'Zara';
      const value = GetAlphabetValue(name);
      console.log(`The alphabetical value of '${name}' is ${value}`);
      


/*
        EXERCISE 5c
        ~~~~~~~~~~~~~~~~~~~~~~~~~~ 

        7. Using the function and array of names below, loop through each name and display the name and its corresponding alphabetical value.
            1. Autumn: ...
            2. Jane: ...

        8. What name has the maximum alphabetical value, and what is its alphabetical value?
*/
let names = ["Lucas", "Jack", "Madison", "Oliver", "Grayson", "Violet", "Miles", "Isaiah", "Asher", "Luna", "Ella", "Zoey", "Carter", "Thomas", "Sophia"];

// Initialize variables to keep track of the maximum value and name
let maxName = "";
let maxAlphabetValue = 0;

function GetAlphabetValue(str) {
  // Define the alphabet variable
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  // Convert the input string to lowercase to ensure case insensitivity
  str = str.toLowerCase();

  // Initialize a variable to store the alphabetical value
  let alphabetValue = 0;

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Find the position of the character in the alphabet
    let position = alphabet.indexOf(str[i]) + 1;

    // If the character is in the alphabet, add its position to the total value
    if (position > 0) {
      alphabetValue += position;
    }
  }

  // Return the calculated alphabetical value
  return alphabetValue;
}

for (let i = 0; i < names.length; i++) {
  let name = names[i];
  let value = GetAlphabetValue(name); // Fix this line to use the correct variable 'name'
  console.log(`${i + 1}: ${name} ${value}`);

  if (value > maxAlphabetValue) {
    maxName = name;
    maxAlphabetValue = value;
  }
}

console.log(`The name with the maximum alphabetical value is "${maxName}" with a value of ${maxAlphabetValue}.`);

