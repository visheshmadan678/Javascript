//today we will learn the dates in java script


let mydate = new Date();

console.log(mydate);

console.log(mydate.toDateString()); // this will also tell the day month date and year 

console.log(mydate.toLocaleDateString()); // this will add slashes in between the dates and will give MM/DD/YYYY format of date

let newdate = new Date('01-02-2005'); // we can also provide the date in this format also 

console.log(newdate.toLocaleDateString());


let array  = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]; // this is an array 
 
let mytimestamp = Date.now();

console.log(mytimestamp);
console.log(newdate.getTime());


console.log(Math.floor(newdate.getTime() / 1000)); // to convert that date to the seconds 

console.log(array[mydate.getDay()]); // will return the day