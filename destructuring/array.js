let array1 = [2, 3, 4];
let a;
let b;
let c;

// Cara biasa
// a = array1[0];
// b = array2[1];

// Cara destructuring
[a, b, c] = array1;

console.log(a, b, c);
console.log(`${a}, ${b}, ${c}`);