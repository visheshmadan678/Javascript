//this time we will learn the conversion operation in java script 

let age = undefined; // in case of null it will store the 0 after conversion
//if i will store the string and convert it to the number it will still show NaN 
// and in case of undefined it will store nan as the ouput
let nam = "vishu badmash";
let value = false;
console.log(typeof age); // this will show that the type is number
console.log(typeof nam); // this will show that the type if string
console.log(typeof value); // this will show that type is boolean of our data type

let val = Number(age);

console.log(typeof(val));
console.log(val); 

if(val=="NaN"){
    console.log('Its a nan type of number');
}
else{
    console.log('It is not a nan type of number');
}
