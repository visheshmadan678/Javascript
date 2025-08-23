const buttons = document.querySelectorAll('.button')
 //store all the buttons

const body = document.querySelector('body');
//har ek button par event listener lagayenge hum

buttons.forEach((item)=>{
  item.addEventListener('click',(event)=>{
      if(event.target.id == "grey"){
        body.style.backgroundColor = event.target.id;
      }
      if(event.target.id == "white"){
        body.style.backgroundColor = event.target.id;
      }
      if(event.target.id == "blue"){
        body.style.backgroundColor = event.target.id;
      }
      if(event.target.id == "yellow"){
        body.style.backgroundColor = event.target.id;
      }
      if(event.target.id == "pink"){
        body.style.backgroundColor = event.target.id;
      }
      if(event.target.id == "green"){
        body.style.backgroundColor = event.target.id;
      }
      if(event.target.id == "cyan"){
        body.style.backgroundColor = event.target.id;
      }

  })
})