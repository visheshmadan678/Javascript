//today we will learn the string in java script

//code by vishu badmos 
// badmashi nahi mitar


let name = "Vishu badmos";
let age = 20;

//code by vishu badmos 

console.log(`hello my name is ${name} and my age is ${age}`); // this is how string formatting is done in java script 


let str  = new String('VishuMadan');

console.log(str[0]);

console.log(str.toUpperCase()); // to convert to the uppper case 
console.log(str.charAt(5)); // to check the char at 
console.log(str.endsWith('n')); // to check ends with what returns a boolean value 
console.log(str.indexOf('M')); // this will tell me the index of my character


let new_string = str.substring(0,5); // will take five characters starting from the zero

console.log(new_string);

let str1 = str.slice(-1,4); // will take from the back side // but the substring function cannot do the same keep this is 
// mind 
console.log(str1);

//now we will use the trim function in this 

let newString = "  vishubad   mash is   good boy  "; // okay it will delete only the spacees from the both the ends 
console.log(newString)
console.log(newString.trim());


let url = "https://vishubadmash.com/vishu%20madan";


console.log(url.replace("%20","and")); // will replace our string with other string

console.log(url.includes("vishu")); // to check if the string contains it or not ?