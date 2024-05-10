/*
        COMP5830: An Introduction to Programming and Web Technologies
        Lecturers: Elena Botoeva & Kemi Ademoye

        CLASS EXERCISE: JAVASCRIPT
        Topic: Functions and Arrays
 */

/*
        EXERCISE 2a
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        The following array contains marks obtained by students on a test.

        1. Write a function called GetGrade that:
            a. Accepts a mark as a parameter
            b. Returns 'Pass' or 'Fail' depending on whether the mark is above or below 40

        2. Write another function (give it a name of your choice) that:
            a. Accepts the marks array as a parameter
            b. Calculates and returns the average mark of the marks in the array 
*/

let marks = [47, 15, 29, 53, 75, 21, 79, 80, 63, 17];

console.log("Marks", marks);

//function.GetGrade ( 47, 15, 29, 53, 75, 21, 79, 80, 63, 17) {

 // 

 function GetGrade(mark) {
    if(mark >=40 ) {
        return 'Pass' 
    } else {
        return 'Fail'
    }  
}

// Check if pass or fail
for (let mark of marks) {
    var grade = GetGrade(mark);
    console.log(`Mark ${mark}: ${grade}`);
}
  

function AverageMarks(marks) {
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}






var power = function(base, exponent){
    var result = 1;
    for (var count = 0; count < exponent;count ++)
    result *= base;
return result;
};


function EuroString (euros, cents) {
    console.log (`${euros} .$`)
var centsStr = String(cents);
if (cents < 10) {centssStr = `0${centsStr}`;}
console.log(`(£${euros} . ${cents}`);
}
EuroString (10, 7); // for 10 euros and 7 cents, will print £10.07






//The if statement line is used to add 0 (zero) if the number of cents is less than 10, so the function output £10.07 and not £10.7







/*
        EXERCISE 2b
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Test your functions as follows:
        1. Use your average function to determine and display the average mark (to 1 decimal place) in the following format:
            Average Test Mark:  ...

        2. Apply your GetGrade function to each student's mark and display the output in the following format:

            Student 1:  ... % (Fail)
            Student 2:  ... % (Pass)
            ...
*/

let marks = [47, 15, 29, 53, 75, 21, 79, 80, 63, 17];

function AverageMarks(marks) {
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

// Calculated average mark
var average = AverageMarks(marks);
console.log(`Average Mark: ${average.toFixed(1)}`);

// % Display

function GetGrade(mark) {
    if(mark >=40 ) {
        return 'Pass' 
    } else {
        return 'Fail'
    }  
}

for (var i = 0; i < marks.length; i++) {
    var mark = marks[i];
    var grade = GetGrade(mark);
    console.log(`Student ${i + 1}: ${mark}% (${grade})`);
}





/*
        EXERCISE 2c
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        1. Extend your GetGrade function so that if the mark is:
            70 or above, it returns 'Pass with Distinction'
            60 or above but less than 70, it returns 'Pass with Merit'
            40 or above but less than 60, it returns 'Pass'
            Below 40, it returns 'Fail'

            Hint: testing in descending order requires less code
        
            You may choose to give this version of the function a different name, or you can just modify the existing function.

        2. Test your function by applying it to all the marks as you did 
        in the previous exercise.
*/

let marks = [47, 15, 29, 53, 75, 21, 79, 80, 63, 17];

function GetGrade(mark) {
    if (mark >= 70) {
        return 'Pass with Distinction';
    } else if (mark >= 60) {
        return 'Pass with Merit';
    } else if (mark >= 40) {
        return 'Pass';
    } else {
        return 'Fail';
    }
}

// Check if pass or fail
for (let mark of marks) {
    var grade = GetGrade(mark);
    console.log(`Mark ${mark}: ${grade}`);
}
