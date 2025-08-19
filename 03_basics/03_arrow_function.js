//today we will learn the arrow function in java script 
// and this keyword 
const personal = {
    name : "vishesh",
    age :30,
    welcome : function(){
        console.log(`${this.name},Welcome to the homepage`);
        console.log(this);
        
    }
}

personal.welcome();
personal.name = "pappu";
personal.welcome();

console.log(this);


//lets use the function using the arrow function 

const value = (num1)=>{
    return num1+10;
}

console.log(value(10));

//implicit return means main man leta hu ki main ek hi line mein return krna chahta hu or merko return krne ki zrurat nhi hai 

const val2 = (num1,num2) => num1+num2

console.log(val2(10,20));

//agr muje object return krna hai implictiely toh merko parentheseis use krne hi pdegen 
const val3 = (num1,num2) => ({username:"vishu"})    // add parenthesis here to return the object 

console.log(val3(10,20)); //
