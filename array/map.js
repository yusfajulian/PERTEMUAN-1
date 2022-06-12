const numbers = [1, 4, 9, 16];
const newNumbers = numbers.map(function(n) {
    return n * 2;
});

console.log(numbers);
// output: [1, 4, 9, 16]
console.log(newNumbers);
// output: [2, 8, 18, 32]