const randomColor = function (){
    let hexCode = '0123456789ABCDEF';
    let color = "#";
    for( i = 0 ; i < 6 ; i++){
      color += hexCode[Math.round(Math.random() * 16)];
    };
    return color;  
  };
  
  let IntervalID;
  
  //START BUTTON FUNCTIONALITY
  const changeBgColor = function (){
    document.body.style.backgroundColor = randomColor() 
  };
  
  const startChangeColor = function (){
    if(!IntervalID){
      IntervalID = setInterval(changeBgColor , 1000)
    };
  }
  
  //STOP BUTTON FUNCTIONALITY
  const stopChangeColor  = function (){
    clearInterval(IntervalID);
    IntervalID = null;
  
  }
  
  document.querySelector("#start").addEventListener('click' , startChangeColor),
  
  document.querySelector("#stop").addEventListener('click' , stopChangeColor)