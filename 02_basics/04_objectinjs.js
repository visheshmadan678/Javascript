//today we will learn the very important topic of java script and that is objects 


//singleton 
// this we will study some day 



//object literals 
let symkey = Symbol("mykey");

const myuser = {
     name : "vishesh madan",
     age : 10,
     [symkey] : "mykey1",  // thats how the symbol is used inside the object , a different method
     caste : "Multani",
     is_married : false
};

console.log(myuser.is_married); // will return if the user is married or not

//that's how we can print the table of our object 
//from now on we will access values from objects like this 
// console.table([
//     myuser["name"],
//     myuser["age"],
//     myuser["caste"],
//     myuser["is_married"]
// ])


myuser.age = 100; // this will change 
//but now i will freeeze the age 
// Object.freeze(myuser); // let's freeze the age // now after this no changes can be made to the user //becasue i freezed it 
myuser.age = 10000;

console.log(myuser);


myuser.greetings1 = function(){
    console.log("Hello Vishu badmos");
}

myuser.greetings2 = function(){
    console.log(`Hello Mr ${this.name} Welcome to the Desk`);
}


console.log(myuser.greetings1());
console.log(myuser.greetings2());



