'use strict';
//console.log(process.argv[0] + ' ' + process.argv[1]);
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}
console.log(sum);

