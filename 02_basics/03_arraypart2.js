let marvel = ["Ironman","hulk","Black Widow","IronFeast"];
let dc = ["Bolt", "Batman","SuperMan","Wonder Woman"];


// marvel.push(dc);
// console.log(marvel);
// let allheroes = marvel.concat(dc); 

// console.log(allheroes); // this will concat both the arrays and make  a sepearte array 

let allnewheroes = [...marvel,...dc]; //this operation can also be done to concatenate both the arrays 

console.log(allnewheroes)

let numbers = [1,2,3,[4,5,[7,8]]];

console.log(numbers.flat(Infinity)); // this will make the array flat without any subarrays inside it

console.log(Array.isArray("Vishesh"));

console.log(Array.from("vishesh")); // will convert the string into the array //very good language java script is i think 

console.log(Array.from({name:"vishesh"})); // will return a null array 

let nm1 = 100
let nm2 = "300"
let nm3 = true

console.log(Array.of(nm1,nm2,nm3)); // we can also create the arrays like this 