// Looping a triangle
// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// ####### 

const triangleFunc = (rows) => {
    let triangle = "";
    for (let i = 0; i < rows; i++) {
        triangle = triangle + "#";
        console.log(triangle);
    }
}
//triangleFunc(7);


// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
// number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for
// numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
// for numbers divisible by only one of those).
// (This is actually an interview question that has been claimed to weed out
// a significant percentage of programmer candidates. So if you solved it, your
// labor market value just went up.)


const fizzBuzz = () => {
    let number = 0;
    for (let i = 0; i <= 100; i++) {
        number++;
        if (number % 3 == 0 && number % 5 == 0) {
            console.log("Fizzbuzz");
        } else if (number % 3 == 0 && number % 5 != 0) {
            console.log("Fizz");
        } else if (number % 5 == 0 && number % 3 != 0) {
            console.log("Buzz")
        } else {
            console.log(number)
        }
    }
}

//fizzBuzz();



// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size
// = 8 and change the program so that it works for any size, outputting a grid
// of the given width and height.


const chessboardFunc = (width, height) => {
    let chessboardWidth = "";
    let chessboard = "";
    for (let i = 0; i < width; i++) {
        chessboardWidth = chessboardWidth + "# "
    }
    chessboardWidth = chessboardWidth + "\n"
    for (let i = 0; i < height; i++) {
        if (i % 2 == 0) {
            chessboard = chessboard + " " + chessboardWidth;
        } else {
            chessboard = chessboard + chessboardWidth;
        }
    }
    console.log(chessboard)

}

//chessboardFunc(4, 4);