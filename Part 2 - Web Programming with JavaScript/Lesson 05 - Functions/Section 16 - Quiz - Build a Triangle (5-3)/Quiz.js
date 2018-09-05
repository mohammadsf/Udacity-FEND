/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length (Already Given by Udacity)
function makeLine(length) {
    var line = "";
    for (var l = 1; l <= length; l++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.

//Function that will accept an input (Triangle at it's widest width) and return the string representation of of a triangle.
function buildTriangle(num) {
    let triangle = "";
    
    for (let t = 1; t <= num; t++){
        triangle += makeLine(t);
    }

    return triangle;
} 

// Testing code:
console.log(buildTriangle(10));