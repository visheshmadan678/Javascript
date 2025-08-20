//we will learn the for each loop in this
const array = ["python","ruby","datasicnce","jaava"];

// array.forEach((item)=>{
//     console.log(item);
// })


array.forEach(st);

function st(item){
    console.log(item);
}

//yeh for each wala teen cheeeze layega taah index, value, array pura ka pura 


array.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

//how to iterate over the array of objects 
const vishu  = [
    {
        lanuguage:"python"
    },
    {
        lanuguage:"ruby"
    }
]

vishu.forEach((item)=>{
    console.log(item.lanuguage);
})