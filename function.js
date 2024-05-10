var currentHour = d.getHours();

if (currentHour < 12){

    console.log(`Good moring ${name}`);
    else if (currentHour < 17){
    console.log (`Good afternoon ${name}`);
    else     {
        console.log (`Good evening ${name}`);
    }
}    
 GetGreeting ("John)")

}
}

function DollarsToPounds(dollors) {
    //conversion rate
    var rate = 0.818529;
    

    return dollors * rate;
}

var getPounds = DollarsToPounds(100);

console.log(` 100 USD to GBP: £${getPounds}`);
console.log(` 100 USD to GBP: £${getPounds.toFixed(2)}`); 
// Ensure that it always rounds up to the number 2.

var students = ["Cooper","Nathan", "Jack", "Grace", "Oliver", "Eve", "Brooke", "Alexa" ];
var numbers [ 14, 7, 3, 19, 6, 11, 15, 2, 2, 3];

var maxNum = numbers [0]
for (var i = 0; i < numbers.length; i++)  {

    if (numbers [i] > maxNum){
// update the MWH variable (most wanted )

maxNum = numner[i];
    }
}

//Gather variable
var sum = 0; //

for(var i = 0; i < numbers.length; i++) {

    //calucate the cumlative sum
    //add the current number to the sum

    sum += numbers [i];   //sum = sum + number[i]


    console.log(`Sum is:  ${sum}`)

    var average = sm / numbers.length;
    
    console.log(`Average is:  ${avg}`);


    var numbers [14, 7, 3, 19, 6, 11, 15, 2, 2, 3];

}

// This is the code you done in class

function EuroString (euros, cents) {
    console.log (`${euros} .$`)
}


function GetGreeting (name) {
    var d = new Date();
    console.log(`Date:  ${d}`);



    // get the hour of the day a


    // Revision attempting the questions form the reading
     var square = function (x) {
        return x * x;
     };e

     console.log(square(12));


var makeNoise = function() {
    console.log("Ping!");
};

makeNoise();

var power = function(base, exponent){
    var result = 1;
    for (var count = 0; count < exponent;count ++)
    result *= base;
return result;
};

console.log(power(2,10));

var carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}
 console.log(carName);


 //global code below

let user = {
   name = "Irena",
   age = 25,
};

function greet() {
    console.log(`Hello, ${user.name}!`)
    return new Date().getFullYear() - user.age;
} 
}

//Passing values to functions with arguement

function ourFunctionWithArgs (a,b) {
console.log(a-b);

}
ourFunctionWithArgs(10,5); // Outputs 5

//Only charge code below this line. function - on youtube 54:41



// Strnig method: trim
var greeting = "  Hello  ";
var firstName = " John  ";

// update the string after applying method
greeting = greeting.trim(); // returns "Hello"
firstName = firstName. trim (); // returns "John"

//Now display the trimmed variables
console.log(greeting + " " + firstName);


// String method: replace
var str = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

str.replaced("the", "a"); // only the first "the" (lowercase is replaced)
console.log(str); // the originala string is still the same! You have yo update it.


var letters = "a,b,c,d,e,f";
var fruits = "lemons and oranges and apples and strawberries";
var greeting = "Hello";

letters. split (",");
fruits.split("and");
greeting.split();
greeting.split("");

//String

var str = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
console.log(str.indexOf("the")); // focus on the lower case, it's like arrays it focs on the number
console.log(str.indexOf("bird")); // it's become an minus because it's not apart of the variable string.

console.log (str.indexOf("quick"));
console.log(str.lastIndexOf("quick")); // It starts counting from the "var" 


console.log(str.indexOf("the", 40)); // It can be handy to speficy that spefic character sometimes.

//String Methods (3)

console.log(str.charAt

    // String trim
var str = " Hello  ";
var myName = "  John";

console.log (`${str.trim()} $ {myName.trim()}`);

var str = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

str = str.replace("the", "a");
console.log(str.replace("the", "a"));

console.log(str.replaceALL)

// re = regular
var str = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
// gobal match - g
//case insensitive search - i
var re = /the/gi; 

var newStr = str.replace(re, "a"); 
console.log(newStr);


//string.split



