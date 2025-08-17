//today is the last session of learning object 
// we will learn to destructure the objects 

const course = {
    name : "Vishesh kumar",
    age : 30,
    occupation : "Software developer in google"
}

//so to print the name we will again use the command course.name and course. any other thing but to make it more sipmler
// we will use this
//so we have to use curly braces instead of this

// i can give my own keywords also 
const {name:naam} = course; // this will take the name from the course as name variable and i can directly use the name now 
const {age:umar} =  course;

console.log(naam); //now i can directly use the name instead of course.name and it will directly print the name
console.log(umar);



