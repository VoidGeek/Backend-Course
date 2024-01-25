let a = [];
let b = new Array();

// Adding elements 1, 2, 3, 4 to array 'a'
a.push(1, 2, 3, 4);

// OR

// Adding elements 1, 2, 3, 4 to array 'b'
b.push(1, 2, 3, 4);
console.log(`a: ${a}, b: ${b}, a.length: ${a.length}, b.length: ${b.length}`);

let c = [2, 'Bala', true, { name: 'john' }, function () { console.log("hello"); }];

// Displaying the elements of array 'c'
console.log(c);

// Calling and displaying the content of the function in array 'c'
c[4]();  // This will execute the function and print "hello"

array3=[a,b]
console.log(`Combined Array: ${array3}`);