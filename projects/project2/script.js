//sabsse pehle apnan ko us element ko select krna hai 
const clock = document.getElementById('clock');
//ab maine element ko select kr chuka hu 


//ab muje use krna hai set interval function 
//isko muje yaad rkhna hai ki kaise rkhna hai 
setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000)

//code by vishu badmos