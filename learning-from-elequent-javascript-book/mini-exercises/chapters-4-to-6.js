// Exercises

// The sum of a range
// The introduction of this book alluded to the following as a nice way to compute
// the sum of a range of numbers:
// console.log(sum(range(1, 10)));
// Write a range function that takes two arguments, start and end, and returns
// an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the
// sum of these numbers. Run the example program and see whether it does
// indeed return 55.
// As a bonus assignment, modify your range function to take an optional third
// argument that indicates the “step” value used when building the array. If no
// step is given, the elements go up by increments of one, corresponding to the
// old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
// 9]. Make sure it also works with negative step values so that range(5, 2, -1)
// produces [5, 4, 3, 2].


const createRangeArray = (startNumber, endNumber, step = 1) => {
    const rangeArray = [];
    if (step > 0) {
        for (let i = startNumber; i <= endNumber; i += step) {
            rangeArray.push(i);
        }
    } else if (step < 0) {
        for (let i = startNumber; endNumber <= i; i += step) {
            rangeArray.push(i);
        }
    }
    return rangeArray;
}

// console.log(createRangeArray(5, 1));

const sum = (numberArray) => {
    sumOfNumbers = 0;
    for (i = 0; i < numberArray.length; i++) {
        sumOfNumbers += numberArray[i]
    }
    return sumOfNumbers;
}

// console.log(sum(createRangeArray(1, 10)));


// Reversing an array
// Arrays have a reverse method that changes the array by inverting the order in
// which its elements appear. For this exercise, write two functions, reverseArray
// and reverseArrayInPlace. The first, reverseArray, takes an array as argument
// and produces a new array that has the same elements in the inverse order. The
// second, reverseArrayInPlace, does what the reverse method does: it modifies
// the array given as argument by reversing its elements. Neither may use the
// standard reverse method.
// Thinking back to the notes about side effects and pure functions in the
// previous chapter, which variant do you expect to be useful in more situations?
// Which one runs faster?

// let myArray = [1, 2, 3, 4, 5];

const reverseArray = (array) => {
    let newArray = [];
    for (let i = array.length - 1; 0 <= i; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}


// console.log(reverseArray(myArray));

const reverseArrayInPlace = (array) => {
    for (let i = array.length - 1; 0 <= i; i--) {
        array.push(array[i]);
    };
    console.log("array length before slice ", array.length)
    for (let i = 0; i < array.length / 2; i++) {
        array.shift(array[i]);
    }
    console.log("array length after slice ", array.length)
}

// reverseArrayInPlace(myArray);
// console.log(myArray);


// A list
// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A
// list is a nested set of objects, with the first object holding a reference to the
// second, the second to the third, and so on.
// let list = {
// value: 1,
//  rest: {
//      value: 2,
//      rest: {
//          value: 3,
//          rest: null
//          }
//      }
// };
// 
// A nice thing about lists is that they can share parts of their structure. For
// example, if I create two new values {value: 0, rest: list} and {value: -1,
// rest: list} (with list referring to the binding defined earlier), they are both
// independent lists, but they share the structure that makes up their last three
// elements. The original list is also still a valid three-element list.
// Write a function arrayToList that builds up a list structure like the one
// shown when given [1, 2, 3] as argument. Also write a listToArray function
// that produces an array from a list. Then add a helper function prepend, which
// takes an element and a list and creates a new list that adds the element to the
// front of the input list, and nth, which takes a list and a number and returns
// the element at the given position in the list (with zero referring to the first
// element) or undefined when there is no such element.
// If you haven’t already, also write a recursive version of nth.
const myArray = [1, 2, 3];
let myElement = {
    name: "John Doe"
};


const arrayToList = (array) => {
    let myList = null
    for (let i = array.length; 0 <= i; i--) {
        myList = {
            value: array[i],
            rest: myList
        }
    }
    return myList;
};

// console.log(arrayToList(myArray));
let myList = arrayToList(myArray);



const listToArray = (list) => {
    let myArray = []
    for (let node = list; node; node = node.rest) {
        node.value ?
            myArray.push(node.value)
            :
            myArray
    }

    return myArray;
};

// console.log(listToArray(myList));


const prepend = (el, list) => {
    newLlist = {
        value: el,
        list
    }
    return newLlist;
};

// console.log(prepend(myElement, myList));

const nth = (list, target) => {
    let err = "no such element";
    searchFunc = (target, positionInList, list) => {
        if (target == 1 || target === positionInList) {
            return list;
        } else if (!list.rest) {
            return err;
        } else if (target < positionInList) {
            return err;
        }
        else {
            return searchFunc(target, positionInList + 1, list.rest);
        }
    }
    return searchFunc(target, 1, list);
}

// console.log(nth(myList, 3))


// The == operator compares objects by identity. But sometimes you’d prefer to
// compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they
// are the same value or are objects with the same properties, where the values
// of the properties are equal when compared with a recursive call to deepEqual.
// To find out whether values should be compared directly (use the === operator
// for that) or have their properties compared, you can use the typeof operator.
// If it produces "object" for both values, you should do a deep comparison.
// But you have to take one silly exception into account: because of a historical
// accident, typeof null also produces "object".
// The Object.keys function will be useful when you need to go over the properties of objects to compare them.

const deepEqual = (a, b) => {
    if (a === b) return true;
    else if (typeof (a) !== "object" || a == null ||
        typeof (b) !== "object" || b === null) return false;
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(keysA[key], keysB[key])) return false;
    }
    return true;
}

let obj1 = { name: "Jonas" };
let obj2 = { name: "Jonas" };

console.log(deepEqual(obj1, obj2));































// function deepEqual(a, b) {
//     if (a === b) return true;
//     if (a == null || typeof a != "object" ||
//         b == null || typeof b != "object") return false;
//     let keysA = Object.keys(a), keysB = Object.keys(b);
//     if (keysA.length != keysB.length) return false;
//     for (let key of keysA) {
//         if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//     }
//     return true;
// }