//today we will learn array in java script 

let arr = [1,2,2,3,4,5];


let numbers = new Array(1,2,3,4,5);
console.log(numbers);


console.log(arr[5]); // 0 based indexing 

numbers.push(19);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(9);
console.log(numbers);


// console.log(numbers.findIndex(1));

console.log(numbers.includes(9));

numbers.slice(1,3); // this will not alter the values 
numbers.splice(1,3); // this will alter the values 

console.log(numbers);


