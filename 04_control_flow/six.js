//for each loop will not return the values but what if we don't only want to print the values 
//and i want to perform some operations on those values ? 

//now for that i will use the filter 


const array  = [1,2,3,4,5,6,7,8,9];


const values = array.filter((item)=>{return item>4}); // it will only return the values greater than 4 only 


console.log(values);
