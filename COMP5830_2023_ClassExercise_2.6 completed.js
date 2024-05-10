/*
        COMP5830: An Introduction to Programming and Web Technologies
        Lecturers: Elena Botoeva & Kemi Ademoye

        CLASS EXERCISE: JAVASCRIPT
        Topic: Functions and Higher-Order Functions
        
        CHALLENGE EXERCISE
 */

/*
        The following is a simple function that replaces any vowels in a string with asterisks.
*/

function ReplaceVowels(str) {
        // regular expression which finds all vowels, both in lowecase and uppercase
        // gi - means do a global (g) search that is case-insensitive (i)
        var vowels = /[aeiou]/gi;
        return str.replace(vowels, "*");
}

function EncodeString(str) {
        // A very basic cypher that anyone can crack
        // replaces letters with look-alike numbers

        // array to define letters to match
        // a = 4,  e = 3,  i or l = 1,  o = 0,  b, p, or q = 9
        let rePattern = [/[a]/gi, /[e]/gi, /[il]/gi, /[o]/gi, /[bpq]/gi];

        // array to define the number to replace the matched letter with
        let reReplacement = [4, 3, 1, 0, 9];

        // loop through and replace the letters that match
        for (var i = 0; i < rePattern.length; i++) {
                str = str.replace(rePattern[i], reReplacement[i]);
        }

        return str;
}

/*
        EXERCISE 6a
        ~~~~~~~~~~~~~~~~~~~~~~~~~~     
        You have been given two functions above, ReplaceVowels and EncodeString, which do some basic encoding of a string.

        1. Using console.log statements, test the two functions with the test strings given below, or a string of your choice.
 */

let testStr1 = "Hello and Good afternoon";
let testStr2 = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";


function ReplaceVowels(str) {
        // regular expression which finds all vowels, both in lowecase and uppercase
        // gi - means do a global (g) search that is case-insensitive (i)
        var vowels = /[aeiou]/gi;
        return str.replace(vowels, "*");

}

var inputString ="Hello and Good afternoon";
var result = ReplaceVowels(inputString);
console.log(result);




function EncodeString(str) {
        // A very basic cypher that anyone can crack
        // replaces letters with look-alike numbers

        // array to define letters to match
        // a = 4,  e = 3,  i or l = 1,  o = 0,  b, p, or q = 9
        let rePattern = [/[a]/gi, /[e]/gi, /[il]/gi, /[o]/gi, /[bpq]/gi];

        // array to define the number to replace the matched letter with
        let reReplacement = [4, 3, 1, 0, 9];

        // loop through and replace the letters that match
        for (var i = 0; i < rePattern.length; i++) {
                str = str.replace(rePattern[i], reReplacement[i]);
        }

        return str;
}

var inputString = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
var encodedString = EncodeString(inputString);
console.log(encodedString);





/*
        EXERCISE 6b
        ~~~~~~~~~~~~~~~~~~~~~~~~~~     
        You have been given another function below which accepts the following parameters
                str - a string value
                fn - a function (the name of another function)

        This type of function is called a higher-order function (see the additional PowerPoint slides added to Moodle).
        A higher-order function is a function that operates on other functions, either by accepting functions as parameters or returning a function. They are very useful in more advanced programming.

        2. Remember you use a function as follows
                functionName(parameter1, parameter2, ...);
        
        Test the TransformString function using:
                parameter 1: the test string values (testStr3, testStr4)
                parameter 2: the two functions (ReplaceVowels, EncodeString)
        
        Note: You need to test them one at a time (testStr1 and function 1, testStr4 and function 2, ...)
 */

let testStr3 = "What's your favourite ice cream flavour?";
let testStr4 = "I think I could fall asleep really quickly.";


// this function accepts two parameters
// str - a string value, fn - another function to use inside this function
function TransformString(str, fn) {
        // Using the function (fn) passed to this function, transform the string (str) passed to the function

        let newStr = fn(str);

        // log the original and transformed strings to the console.
        console.log(`Original string: ${str}`);
        console.log(`Tranformed string: ${newStr}`);
}

// Define the ReplaceVowels function
function ReplaceVowels(str) {
        return str.replace(/[aeiouAEIOU]/g, '*');
    }
    
    // Define the EncodeString function
    function EncodeString(str) {
        return str.split('').reverse().join('');
    }
    
    // Define a function to transform a string
    function TransformString(str, transformFunction) {
        var newStr = transformFunction(str);
        console.log(`Original string: ${str}`);
        console.log(`Transformed string: ${newStr}`);
    }
    
    // Test with testStr3 and ReplaceVowels
    TransformString(testStr3, ReplaceVowels);
    
    // Test with testStr4 and EncodeString
    TransformString(testStr4, EncodeString);
    



/*
        EXERCISE 6c
        ~~~~~~~~~~~~~~~~~~~~~~~~~~ 
        Now it's your turn to write some functions :)

        Write JavaScript code for the following:
        1. Create a function IsOdd
                It accepts a parameter called n (a number)
                Returns true if the number, n, is odd, otherwise false
        2. Create a function IsLessThan10
                It accepts a parameter called n (a number)
                Returns true if the number, n, is less than 10, otherwise false
        3. Test your functions with numbers of your choice.
                Challenge exercise: using the concepts of loops and random numbers, test the functions using 5 randomly generated numbers

                Remember to output the results to the console, e.g.
                        13 is odd: true
                        13 < 10: false
*/

let numbers = [67, 22, 3, 74, 1];

function IsOdd(n) {
        return n % 2 !== 0;
    }
    
    function IsLessThan10(n) {
        if (n < 10) {
            return 'Pass';
        } else {
            return 'Fail';
        }
    }
    
    for (let number of numbers) {
        var result = IsLessThan10(number);
        console.log(`Mark ${number}: ${result}`);
    }
    
    console.log("Testing with 5 randomly generated numbers:");
    for (let i = 0; i < 5; i++) {
        var randomNum = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
        console.log(`Random Number ${i + 1}: ${randomNum}`);
        console.log(`Is Odd: ${IsOdd(randomNum)}`);
        console.log(`Is Less Than 10: ${IsLessThan10(randomNum)}`);
        console.log('-----------------');
    }


/*
        EXERCISE 6d
        ~~~~~~~~~~~~~~~~~~~~~~~~~~ 
        1. Write JavaScript code to create a higher-order function:
                Called FilterNumbers
                
           It accepts the following parameters
                arr - an array of numbers
                fn - a function (the name of another function)

        2. Create a new variable in the function called results and intialise this as an empty array [].

        3. Loop through the array (arr) passed to the function.
                Using the function parameter (fn), test if each array item returns true.
                If the test is true, add the array item to the results array.

        4. Return the results array from the function.

*/

function FilterNumbers(arr, fn) {
        // Create an empty array to store the results
        let results = [];
    
        // Loop through the array and use the filtering function
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i])); {
                results.push(arr[i]);
            }
        }
    
        return results;
    }



/*
        EXERCISE 6e
        ~~~~~~~~~~~~~~~~~~~~~~~~~~ 
        1. Test your FilterNumbers function using the numbers array below and the two functions. Remember to output the results to the console.        
                console.log("Numbers Less Than 10:", ...);
                console.log("Odd Numbers:", ...);
*/

let numbers = [72, 42, 65, 14, 92, 29, 10, 54, 53, 5, 85, 88, 11, 56, 3, 50, 68, 93, 3, 7, 61, 73, 0, 44, 72, 25, 82, 79, 63, 20, 78, 2];

// Define the isOdd function
function isOdd(number) {
        return number % 2 !== 0; // Corrected to check for odd numbers
    }
    
    function IsLessThan10(n) {
        return n < 10;
    }
    
    function FilterNumbers(arr, fn) {
        // Create an empty array to store the results
        let results = [];
    
        // Loop through the array and use the filtering function
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i])) {
                results.push(arr[i]);
            }
        }
    
        return results;
    }
    
    var oddNumbers = FilterNumbers(numbers, isOdd); // Corrected the variable name
    console.log("Odd numbers:", oddNumbers);
    
    var numbersLessThan10 = FilterNumbers(numbers, IsLessThan10);
    console.log("Numbers Less Than 10:", numbersLessThan10);