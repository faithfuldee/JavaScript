/*
        COMP5830: An Introduction to Programming and Web Technologies
        Lecturers: Elena Botoeva & Kemi Ademoye

        CLASS EXERCISE: JAVASCRIPT
        Topic: Functions
 */

/*
        EXERCISE 1a
        ~~~~~~~~~~~~~~~~~~~~~~~~~~     
        1.  Write a function called "MilesToKm" that:
            a. accepts a parameter representing the distance in miles (a number)
            b. converts the distance in miles to kilometres (km) 
            c. returns the converted distance in km. 

            Hints:
                - 1 mile is approximately equal to 1.609344 km.
 */

                function MilesToKm(miles) {
                        var rate = 1.609344;
                        return miles*rate    
                }
                var milestoconvert = 15
                var result = MilesToKm(milestoconvert);
                    
                console.log(`${result} km`);




/*
        EXERCISE 1b
        ~~~~~~~~~~~~~~~~~~~~~~~~~~  
        2. Test your function and convert the following values to kilometres: 2.5, 5, 10, 26.2
            Output the conversion results in 
            the following format:
                2.5 miles = 1.55 km
                5 miles = ... km
                and the same for the other values
        3. How do you get your results to display to 2 decimal places?
*/

function MilesToKm(miles) {
        var rate = 1.609344;
    
        return miles * rate;
    }
    
    var getKilometres = MilesToKm(2.5);
    
    console.log(`2.5 miles to Km: ${getKilometres.toFixed(2)}`);
    console.log(`5 miles to Km: ${MilesToKm(5).toFixed(2)}`);
    console.log(`10 miles to Km:  ${MilesToKm(10). toFixed(2)}`);
    console.log(`26.2 miles to Km: ${MilesToKm(26.2).toFixed(2)}`);
    
    console.log("");