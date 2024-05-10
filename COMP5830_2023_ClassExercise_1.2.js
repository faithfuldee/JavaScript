/*
        COMP5830: An Introduction to Programming and Web Technologies
        Lecturers: Elena Botoeva & Kemi Ademoye

        CLASS EXERCISE: JAVASCRIPT
        Topic: Arrays and Loops
 */


/*
        EXERCISE 2a
        ~~~~~~~~~~~~~~~~~~~~~~~~~~

        The following array contains a collection of student names.
        Write some JavaScript code to output the following (with appropriate labels for 1 and 2).

        1. The number of students in the array, e.g. Number of students: ...
        2. The name of each student on a new line in the following format:
            1. Molly
            2. Sarah
               ...        
*/

var names = ["Molly", "Sarah", "Jayden", "Naomi", "Alexander", "Cameron", "Layla", "Matthew", "Charles", "Natalie"];

var studentNames = students.length;
console.log(`Number of students $[1,2]`);


/*
        EXERCISE 2b
        ~~~~~~~~~~~~~~~~~~~~~~~~~~

        Modify your code for the previous exercise (2a) above to also display:

        3. The number of students with names starting with the letter "M" OR "S". Hints: 
            - You do not need to write a separate loop, add the code to the loop you have already made
            - You can test for a match using one the string methods at this link: https://www.w3schools.com/jsref/jsref_obj_string.asp
            
            - You will need to create a variable before the loop and initially set this to zero
            -If there is a match, you increase the value of the variable

            After the loop ends display the number of students who matched in the following format
                Names starting 'M' or 'S':  ...               

            - You will need to combine the two Boolean test conditions.
            - You combine Boolean test conditions using the following syntax (... is the condition you are testing for):
                AND:    (... && ...)
                OR:     (... || ...)
*/