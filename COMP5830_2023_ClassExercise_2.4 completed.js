/*
        COMP5830: An Introduction to Programming and Web Technologies
        Lecturers: Elena Botoeva & Kemi Ademoye

        CLASS EXERCISE: JAVASCRIPT
        Topic: Functions, Loops, and Strings
 */

/*
        QUESTION 4
        ~~~~~~~~~~~~~~~~~~~~~~~~~

        Bulletin board and forum sites often allow users to enter text using simple markup languages like
        markdown (https://www.markdownguide.org/basic-syntax/) or AsciiDoc (https://powerman.name/doc/asciidoc).
        
        In AsciiDoc, among other things, users can specify:
            italic text:    using underscores _like this_ 
            bold text:      using asterisks *like this*
*/


/*
        QUESTION 4a
        ~~~~~~~~~~~~~~~~~~~~~~~~~

        Write a function called AsciiDocToHtml that 
            a. Accepts a str (string value) as a parameter
            b. Returns the string value converted to proper HTML. 
                That is test which was previously surrounded by:
                - underscores (_) now surrounded by <em> and </em>
                - asterisks (*) now surrounded by <strong> and </strong>.

                For example:
                _hello_ becomes <em>hello</em>
                *world* becomes <strong>world</strong>

        Hint: it is actually easier doing this using a loop
*/

function convertAsciiDocToHtml(inputStr) {
        var htmlStr = ''; // Initialize an empty string to store the HTML output
        var insideEm = false;
        var insideStrong = false;
      
        for (var i = 0; i < inputStr.length; i++) {
          if (inputStr[i] === '_') {
            if (insideEm) {
              htmlStr += '</em>';
              insideEm = false;
            } else {
              htmlStr += '<em>';
              insideEm = true;
            }
          } else if (inputStr[i] === '*') {
            if (insideStrong) {
              htmlStr += '</strong>';
              insideStrong = false;
            } else {
              htmlStr += '<strong>';
              insideStrong = true;
            }
          } else {
            htmlStr += inputStr[i];
          }
        }
      
        // Close any remaining <em> and <strong> tags if they were left open
        if (insideEm) {
          htmlStr += '</em>';
        }
        if (insideStrong) {
          htmlStr += '</strong>';
        }
      
        return htmlStr;
      }
      
      // Example usage:
      var asciidocText = " _Hello_  *World* ";
      var htmlOutput = convertAsciiDocToHtml(asciidocText);
      console.log(htmlOutput);
      






/*
        QUESTION 4b
        ~~~~~~~~~~~~~~~~~~~~~~~~~

        A piece of sample text in AsciiDoc is given here. 
        Using the function created in (a), output to the console the AsciiDoc text converted to HTML.
*/

let asciiText = "Lorem ipsum dolor sit amet, _consectetuer_ adipiscing elit. *Aenean commodo* ligula eget dolor. *Aenean massa*. Cum sociis natoque penatibus et _magnis dis parturient montes, nascetur *ridiculus mus*_. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, _fringilla vel, *aliquet nec*, vulputate eget, arcu._";

function convertAsciiDocToHtml(inputStr) {
        var htmlStr = ''; // Initialize an empty string to store the HTML output
        var insideEm = false;
        var insideStrong = false;
      
        for (var i = 0; i < inputStr.length; i++) {
          if (inputStr[i] === '_') {
            if (insideEm) {
              htmlStr += '</em>';
              insideEm = false;
            } else {
              htmlStr += '<em>';
              insideEm = true;
            }
          } else if (inputStr[i] === '*') {
            if (insideStrong) {
              htmlStr += '</strong>';
              insideStrong = false;
            } else {
              htmlStr += '<strong>';
              insideStrong = true;
            }
          } else {
            htmlStr += inputStr[i];
          }
        }
      
        // Close any remaining <em> and <strong> tags if they were left open
        if (insideEm) {
          htmlStr += '</em>';
        }
        if (insideStrong) {
          htmlStr += '</strong>';
        }
      
        return htmlStr;
      }
      
      // Example usage:
      var asciidocText = "Lorem ipsum dolor sit amet, _consectetuer_ adipiscing elit. *Aenean commodo* ligula eget dolor. *Aenean massa*. Cum sociis natoque penatibus et _magnis dis parturient montes, nascetur *ridiculus mus*_. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, _fringilla vel, *aliquet nec*, vulputate eget, arcu._";
      ;
      var htmlOutput = convertAsciiDocToHtml(asciidocText);
      console.log(htmlOutput);

