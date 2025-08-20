//these loops will be array specific loops 

// const array = [1,2,2,3,4,5];

// for(const num of array)console.log(num); // this is for off loop syntax in java script 


// const str = "Helloworld!"

// for(const s of str)console.log(s); 


//maps in java script

const mp = new Map();

mp.set('vishu','papa');
mp.set('abhay','beta');
mp.set('shakya','beta'); // i cannot use the for of looop on the maps 

for([a ,b]of mp)console.log(`${a} is ${b} `);




//for of loops are not iterable on the objects 

const myObject = {
    java : "javascript",
    cpp : "c++",
    ruby : "Datascience",
    swift : "apple"
}

for(const key in myObject){
    console.log(key,"value :-->",myObject[key]);
}


//of waale loops mein direct values aati hai or dusre waale loop joki in wala loop hai usmein keys aati hai 