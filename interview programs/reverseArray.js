// 1. Array Reverse Using an Extra Array (Non In-place):

// using inbuilt method
function reverseArray(arr) {

    // creates a shallow copy of the input array using the slice() method,
    // and then reverses the copied array using the reverse() method, and finally returns the reversed array. 
    return arr.slice().reverse();
}

let oA = [1,2,3,4,5];
let revArray = reverseArray(oA);
console.log("Reversed Array order is :", revArray);


// without using inbuilt method
function reversArray(arr) {

    // Initialize an empty array to store the reversed elements
    let reversedArray = [];

    // Start a loop iterating from the last index of the input array down to the first index
    for(let i = arr.length - 1; i >= 0; i--) {

        // Push each element of the input array in reverse order into the reversedArray
        reversedArray.push(arr[i]);
    }

    // Return the reversedArray
    return reversedArray;
}

let oA1 = [11,22,33,44,55];
let revArray1 = reversArray(oA1);
console.log("Reversed Array order is :", revArray1);


// 3

myarr1 = [1, 19, 99, 0, 45, 7];
reverseArray = []

// let reverseArray = myarr1.slice().reverse();
// let reverseArray = Array.from(myarr1).reverse();

for (let i= myarr1.length-1; i >=0; i--) {
    reverseArray.push(myarr1[i])
}

console.log("my array is ", myarr1);
console.log("reverse array is ", reverseArray);


// 4 stack using array 
// array1 = [2, 4, 6, 8, 10]

class Stack {
    constructor() {
        this.my_array = []; // Corrected declaration of my_array using 'this'
    }

    push(element) {
        this.my_array.push(element); // Corrected reference to my_array using 'this'
    }

    pop() {
        if (this.my_array.length === 0) { // Corrected reference to my_array using 'this' and '===' for strict equality check
            return "stack underflow"; // Changed the message to "stack underflow" for empty stack
        }
        return this.my_array.pop();
    }
}

// Example usage:
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.pop()); // Outputs: 3
console.log(myStack.pop()); // Outputs: 2
console.log(myStack.pop()); // Outputs: 1
console.log(myStack.pop()); // Outputs: "stack underflow"

