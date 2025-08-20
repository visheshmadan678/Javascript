//reduce in java script 


const array  = [1,2,3,4,5,6];
let init_val = 0;

const newvar = array.reduce((accumultor,curr)=>{return accumultor+curr},init_val); // will accumulate all the values into our new array 

console.log(newvar);
