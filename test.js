console.log ( "hello world");

console.log(`Sum is ${5+4}`) // This applies to the number of vlaue you want to place inbetween

console.log (( 15 % 2 == 1)) && ( 15 > 10);

var x = 2;



console.log ( `x: ${x}`) // This is the presentation that is preferred when setting out your value

var sqrt = Math.sqrt (36);


/*
        COMP5830: An Introduction to Programming and Web Technologies
        Lecturers: Elena Botoeva & Kemi Ademoye


        CLASS EXERCISE: JAVASCRIPT
        Topic: Basic Language Features
 */


/*
        EXERCISE 1a
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        1. Create a variable called width with a value of 15
        2. Create a variable called height with a value of 20
        These variables represent the sides of a rectangle


        3. Calculate and display the area of the rectangle (width x height) adding an appropriate label using either Template Literals or string concatenation.
       
        Your output to the console should be in the following format
        where ... is the calculated area value:
                Area of triangle W=15, H=20:    ...
*/


var width = 15;
var height = 20;


console.log("Area: "+ (width * height));








/*
        EXERCISE 1b
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        1. Create a variable called greeting and set its value to a greeting of your choice:
                e.g., Good morning, Hello, ...
       
        2. Create another variable called myName and set its value to your name or a name of your choice


        3. Using string concatenation or template literals, combine the two strings together to create a personalised greeting and display the output to the console (you must use the variables).


        E.g., Good morning Ben
*/




 console.log("Good moring");
 myName = "Clare"


console. log("Good moring" + " "+ (myName ));


/*
        EXERCISE 1c
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        1. Create 2 separate variables called n1 and n2 set their value to a random number between 0 and 100
       
        2. Calculate the sum of the two random numbers and store the result in a variable called 'sum'.
       
        3. Display the calculate sum to the console in the following format
        where n1 and n2 are the random values, and ... is the calculated sum
                n1 + n2 = ...
       
                For example, if the random numbers are 51 and 77, your output would be:  
                        51 + 77 = 128


        4. If the sum of the 2 numbers is even, display a message 'even sum', otherwise display a message 'odd sum'.
*/


var n1 = 5;
var n2 = 15;
var sum = n1 + n2
 
// This is the sum of your code, whci presents the sum, which is 20.
console.log(sum)


// This is presents output, so 15 + 5 = 20
console.log(`${n1} + ${n2} = ${sum}`);


// This presents the sum, which would present sum is 50
console.log (`Sum is ${n1 + n2}`);


//console.log (n1 + " + " + " + n2 + " = " sum);


if(sum % 2 == 0){
        console.log("even sum")
}
else{
        console.log("odd sum")
}
