//today we will do singleton in objects // in previous video we did object literals 



let kaalukabyah = {
    name : "Kaalu kumar",
    kaam : "Muth marna",
    dharm : {
        shatriya : "ladai karna",
        vaishya : "charan sparsh",
        shudra : "Jhadu karna",
        bhramin : "Londiya Bazzi krna"
    },
    papa : "Pappu Kumar yadav"
}

console.log(kaalukabyah);


// now i will combine two objects with each ohter 


let object1 = {1:2,3:4}
let object2 = {5:6,7:8}

// let object3 = {object1,object2}

// const object3 = Object.assign({},object1,object2);

const object3 = {...object1,...object2}; // glass ko pkda or chod diya //same output will come

console.log(object3) // combined both of the objects 

console.log(Object.keys(kaalukabyah));
console.log(Object.values(kaalukabyah));
console.log(Object.entries(kaalukabyah));

console.log(kaalukabyah.hasOwnProperty('papa'));// will tell that kaaaalu has his papa or not 