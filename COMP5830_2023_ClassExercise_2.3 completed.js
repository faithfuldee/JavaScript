/*
        COMP5830: An Introduction to Programming and Web Technologies
        Lecturers: Elena Botoeva & Kemi Ademoye

        CLASS EXERCISE: JAVASCRIPT
        Topic: String Methods and Functions
 */

        

/*
        EXERCISE 3a
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        
        1.  Create a string variable and set it to any text of your choice (should be a minimum of 5 characters).

        2.  The JS string split() method is used to split a string into an array of substrings. 
        https://www.w3schools.com/jsref/jsref_split.asp
            You specify a separator to determine how you want to split the string as a parameter.
            
            a. Split your string using an empty string ("") as the separator, and store the result in a variable of your choice

            b. Display the value of the new variable from a.
 */

            var createString = 'Sand'
            var splitMyString = createString.split("");
            
            console.log(splitMyString)
            
            var createString = 'Sand';
var reversedString = createString.split('').reverse().join('');

console.log(reversedString)


/*
        EXERCISE 3b
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        There are lots of methods that you can use with arrays: https://www.w3schools.com/jsref/jsref_obj_array.asp

        Using the variable from 2a above, apply the following two array methods and display the results to the console. Study the output:
            a. reverse(), no parameter
            b. join(), with an empty string ("") parameter
*/
var createString = 'Sand';
var reversedString = createString.split('').reverse().join('');

console.log(reversedString)







/*
        EXERCISE 3c
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        A palindrome is a word, line, verse, number, sentence, etc., reading the same backward as forward [https://www.dictionary.com/browse/palindrome].
        For example:
            "Madam", "Refer", "Level", 110011, "Poor Dan is in a droop" are all examples of palindromes.

        NOTE: Punctuation, capitalisation, and spaces are usually ignored.

        1.  Using the concepts from the previous 2 exercises, write a function called "IsPalindrome" that:
            a. Accepts a string as a parameter
            b. Returns true or false whether the passed parameter value is a palindrome or not.

        2.  Test your function using the following values (do not change the case):
            a. madam
            b. racecar
            c. Madam
            d. 110011 (as a number, not a string)
            e. hello
            f. Rotator

            Output your results in the following format (using 'madam' as an example):
                madam is a palindrome: true

        3.  Did the function work as expected? Any syntax or logical errors?
            If yes, what changes can you make to fix these errors (hint: string methods)
*/

let testValues = ["madam", "racecar", "Madam", 110011, "hello", "Rotator"];

console.log();

function IsPalindrome(str) {
    // Convert input to string and then to lowercase (if it's a string)
    str = String(str).toLowerCase();
    // Reverse input string and compare with the original
    return str === str.split('').reverse().join('');
}

console.log('madam is a palindrome: ' + IsPalindrome('madam'));
console.log('racecar is a palindrome: ' + IsPalindrome('racecar'));
console.log('Madam is a palindrome: ' + IsPalindrome('Madam'));
console.log('110011 is a palindrome: ' + IsPalindrome(110011));
console.log('hello is a palindrome: ' + IsPalindrome('hello'));
console.log('Rotator is a palindrome: ' + IsPalindrome('Rotator'));




/*
        EXERCISE 3d
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Sentences or phrases can also be a palindrome.
        For these puctuations and spaces are usually ignored.

        4.  Test your function using the following values:
            a. Poor Dan is in a droop
            b. Step on no pets
            c. never odd or even

            Output your results in the following format (using 'never odd or even' as an example):
                "never odd or even" is a palindrome:    true


        5. Can you make your function work to ignore ALL spaces? 
            Hint:   https://www.w3schools.com/jsref/jsref_replace.asp

            Test your function using the values from 4, and remember to test for something that is not a palindrome too.
           
*/

function IsPalindrome(str) {
    // Convert input to string and then to lowercase (if it's a string)
    str = String(str).toLowerCase();
    // Reverse input string and compare with the original
    return str === str.split('').reverse().join('');
}

console.log('Poor Dan is in a droop : ' + IsPalindrome('Poor Dan is in a droop'));
console.log('Step on no pets: ' + IsPalindrome('Step on no pets'));
console.log('never odd or even: ' + IsPalindrome('never odd or even'));







/*
        EXERCISE 3e
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Additional Challenge for the interested student

        6. Can you make it work to ignore all punctuations, you need to use:
            JS Regular Expressions: https://www.w3schools.com/js/js_regexp.asp

        The only characters you want to include in your test are letters a-z (lowercase or uppercase) and numbers 0-9. Ignore everything else.
        The regular expression for this is shown below and means "Find any character NOT between the square brackets" and search globally (g): 
        /[^a-zA-Z0-9]/g

        You can test this expression at the following link: https://regex101.com/r/4Udz6H/2

        You can test your modified function using:
            a. Oh, who was it I saw? Oh, who?
            b. Evil, olive!
            c. Poor Dan is in a droop
*/
function IsPalindrome(str) {
    // Convert input to string and then to lowercase (if it's a string)
    str = String(str).toLowerCase();
    // Remove all non-alphanumeric characters and spaces
       str = str.replace(/[^a-z0-9]/g, '');
    // Reverse input string and compare with the original
    return str === str.split('').reverse().join('');
}

console.log('Oh, who was it I saw? Oh, who?: ' + IsPalindrome('Oh, who was it I saw? Oh, who?'));
console.log('Evil, olive!: ' + IsPalindrome('Evil, olive!'));
console.log('Poor Dan is in a droop: ' + IsPalindrome('Poor Dan is in a droop'));


console.log();