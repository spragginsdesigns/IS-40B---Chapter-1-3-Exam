/*
          Chapter 1-3 Exam
          Author: Austin Spraggins
          Date: 11/3/2020
          Finished Date: 11/3/2020
          Filename: script.js
*/

// 
function numberList () {
    // gets number from user input
    var boxNumbers = (document.getElementById("box1").value ) * 1; 
    // if it is less than 0 it is not a valid number
    if (boxNumbers < 0 ) {
        // document.write to page that x number is not a valid number
        document.write(boxNumbers  +  " Is Not Valid");
    }
        // if less than the count, write a counter from 1-user number entered
    else {
       var count = 1; 
       while (count <= boxNumbers) {
           document.writeln(count + "<br />"); 
           count++; 
       }
        
    }
         // event listeners for button click on submit button and page load. 
}
function createEventListener () {
    document.getElementById("button1").addEventListener("click", numberList, false);
}
window.addEventListener("load", createEventListener, false); 