//today we will learn the maths library in java script to become a good developer 
//code by vishu badmos 

const score = 500;

console.log(score); // this will just print 500 because we haven't defined the data type of it
//but now i will define it's data type 

const nscore = new Number(600);

console.log(nscore); // this will also tell me that it's  number 

console.log(nscore.toPrecision(10)); // this will add the point values to it


let num = 10000000;

console.log(num.toLocaleString('en-IN')); // will add commas in the number; // and also it will add commas on the basis of indian 
//values 
// this was all about numbers


//let's start maths now 


console.log(Math.abs(-100));

console.log(Math.floor(8.18810)); // will give the floor value 

console.log(Math.max(777,788,7789,777)); // will give the max value same can be done for the min also 

console.log(Math.random()); // will give by value inbetween 0 and 1 always and always a random value it will give me