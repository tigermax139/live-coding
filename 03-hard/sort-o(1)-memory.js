const array = [1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1];
//		 |                           |

let i = 0;
let j = array.length - 1;

while (i !== j || i === array.length - 1) {
    const left = array[i];
    const right = array[j];

    if (right === 1) j--;
    if (left === 0) i++;

    if (right === 0) {
        if (left === 1) {
            array[i] = right;
            array[j] = left;
        } else {
            i++;
        }
    }
}

const array = [1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1];

// Memory: O(1) - meaning: you can only assign a fixed memory size variables that are not dependant on the input size (the array size)
// Single pass: You can only read or write to every cell once
console.log(array);
console.log(array.length);
