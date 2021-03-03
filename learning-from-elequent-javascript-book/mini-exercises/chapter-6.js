// A vector type
// Write a class Vec that represents a vector in two-dimensional space. It takes
// x and y parameters (numbers), which it should save to properties of the same
// name.
// Give the Vec prototype two methods, plus and minus, that take another
// vector as a parameter and return a new vector that has the sum or difference
// of the two vectors’ (this and the parameter) x and y values.
// Add a getter property length to the prototype that computes the length of
// the vector—that is, the distance of the point (x, y) from the origin (0, 0).


class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(otherVec) {
        return { x: this.x + otherVec.x, y: this.y + otherVec.y }
    }
    minus(otherVec) {
        return { x: this.x - otherVec.x, y: this.y - otherVec.y }
    }
}

// const myVec = new Vec(1, 2);
// const yourVec = new Vec(1, 0);

// console.log(myVec.plus(yourVec));
// console.log(myVec.minus(yourVec));

// Groups
// The standard JavaScript environment provides another data structure called
// Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it
// does not associate other values with those—it just tracks which values are part
// of the set. A value can be part of a set only once—adding it again doesn’t have
// any effect.
// Write a class called Group (since Set is already taken). Like Set, it has add,
// delete, and has methods. Its constructor creates an empty group, add adds
// a value to the group (but only if it isn’t already a member), delete removes
// its argument from the group (if it was a member), and has returns a Boolean
// value indicating whether its argument is a member of the group.
// Use the === operator, or something equivalent such as indexOf, to determine
// whether two values are the same.
// Give the class a static from method that takes an iterable object as argument
// and creates a group that contains all the values produced by iterating over it.

class Group {
    constructor() {
        this.group = [];
    }
    add(value) {
        if (!this.group.has(value)) {
            return this.group.push(value);
        }
    }
    delete(value) {
        this.group = this.group.filter(item => item !== value);
    }
    has(value) {
        return this.group.includes(value);
    }
};

const PowersofTwo = (num) => {
    if (num === 2) {
        return true;
    } else if (num < 2) {
        return false;
    } else {
        return PowersofTwo(num / 2)
    };
}

// console.log(PowersofTwo(11));

