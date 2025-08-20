const array  = [1,2,3,4,5,6,7,8,9];

const newa = array.map((num)=>{return num + 10});
console.log(newa);
console.log(array);
//this is called chaining and we can do it long over we want to chain i can also use map and filter and any other also 
const hello = array.map((num)=>{return num+10}).map((nums)=>{return nums+1}).filter((nums)=>{return nums>15});

console.log(hello);
