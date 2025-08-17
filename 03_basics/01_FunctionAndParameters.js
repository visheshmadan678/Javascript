//today we will learn functions and paramteres in java script 

//And when we write the function that is called the parameters 
// function addNumbers(number1, number2){
//     console.log(number1+number2);
// }

// const result = addNumbers(10,20); // will add both of the numbers
//when we call the function that is called arguement 

// console.log(`The result is :-->${result}`); // will print that the result is undefined 


function addNumbers(number1, number2){
    let result = number1 + number2;
    return result;
}
const result = addNumbers(10,20); 
// console.log(addNumbers(10,20)); // will return the value and it will be printed 
// console.log(result);


function loginUser(id, password){
    let a = "vishesh_madan_"; //let this be id  
    let b = "12345678"; // let this be password 
    if(id == a && b == password)return true;
    return false;
}


const flag  = loginUser("vishesh_madan_","12345678");

if(flag){
    console.log(`Welcome Mr Vishesh Madan`);
}
else{
    console.log("Error 404, please try again later");
}

//by default value and overwriting the value in java script 
function timepass(name = "Sam"){
    return name;
}

console.log(timepass());
console.log(timepass("Hitesh"));



function rest(num1, num2, ...nums){
    return nums; // return the array
}


console.log(rest(10,10,30,59,50)); // first two values will go inside the num1 and num2 and rest of the values in nums

//how to pass an object into the function 


const object = {
    name : "vishesh",
    age : 300
}

function objectHandler(dabba){
    return dabba.name;
}

// console.log(objectHandler(object));

//i can directly pass the object also 

console.log(objectHandler({
    name : "vishesh",
    age : 30
}))